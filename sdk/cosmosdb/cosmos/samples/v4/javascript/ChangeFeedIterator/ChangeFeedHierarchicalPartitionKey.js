// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Demonstrates using a ChangeFeed for a partition key
 */

require("dotenv/config");
const { finish, handleError, logSampleHeader } = require("../Shared/handleError.js");
const {
  CosmosClient,
  PartitionKeyDefinitionVersion,
  PartitionKeyKind,
  StatusCodes,
  ChangeFeedStartFrom,
} = require("@azure/cosmos");

const key = process.env.COSMOS_KEY || "<cosmos key>";
const endpoint = process.env.COSMOS_ENDPOINT || "<cosmos endpoint>";
const databaseId = process.env.COSMOS_DATABASE || "<cosmos database>";
const containerId = process.env.COSMOS_CONTAINER || "<cosmos container>";

logSampleHeader("Change Feed");

async function ingestData(container, initialize, end) {
  console.log("beginning data ingestion");
  for (let i = initialize; i < end; i++) {
    await container.items.create({ name: `sample${i}`, key1: 0, key2: "0" });
    await container.items.create({ name: `sample${i}`, key1: 0, key2: "1" });
    await container.items.create({ name: `sample${i}`, key1: 1, key2: "0" });
    await container.items.create({ name: `sample${i}`, key1: 1, key2: "1" });
  }
  console.log("ingested items");
}

async function waitFor(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

// Establish a new instance of the CosmosClient to be used throughout this demo
const client = new CosmosClient({ endpoint, key });

async function iterateChangeFeedTillNow(container) {
  console.log("fetching changefeed until now");

  const changeFeedIteratorOptions = {
    maxItemCount: 1,
    changeFeedStartFrom: ChangeFeedStartFrom.Beginning([0, "0"]),
  };

  let continuationToken = "";
  for await (const result of container.items
    .getChangeFeedIterator(changeFeedIteratorOptions)
    .getAsyncIterator()) {
    // infinite loop to check for new results.
    try {
      if (result.statusCode === StatusCodes.NotModified) {
        // If no new results are found, break the loop and return the continuation token
        continuationToken = result.continuationToken;
        console.log("No new results");
        break;
      } else {
        console.log("Result found", result.result);
      }
    } catch (error) {
      console.error("Error occurred", error);
    }
  }
  return continuationToken;
}

async function run() {
  const { database } = await client.databases.createIfNotExists({ id: databaseId });
  const containerDef = {
    id: containerId,
    partitionKey: {
      paths: ["/key1", "/key2"],
      version: PartitionKeyDefinitionVersion.V2,
      kind: PartitionKeyKind.MultiHash,
    },
    throughput: 11000,
  };
  try {
    const { container } = await database.containers.createIfNotExists(containerDef);
    console.log("Container created");

    await ingestData(container, 1, 11);

    // fetch the continuation token, so that we can start from the same point in time
    const continuationToken = await iterateChangeFeedTillNow(container);
    const changeFeedIteratorOptions = {
      maxItemCount: 1,
      changeFeedStartFrom: ChangeFeedStartFrom.Continuation(continuationToken),
    };
    // ingest some new data after fetching the continuation token
    await ingestData(container, 11, 21);
    let timeout = 0;
    console.log("Starting fetching changes from continuation token");

    for await (const result of container.items
      .getChangeFeedIterator(changeFeedIteratorOptions)
      .getAsyncIterator()) {
      // infinite loop to check for new results.
      try {
        if (result.statusCode === StatusCodes.NotModified) {
          // if no new changes are found, wait for 5 seconds and try again
          console.log("No new results, waiting for 5 seconds");
          timeout = 5000;
        } else {
          console.log("Result found", result.result);
          timeout = 0;
        }
      } catch (error) {
        console.error("Error occurred", error);
      }
      await waitFor(timeout);
    }
  } catch (err) {
    console.error(err);
  } finally {
    await finish();
  }
}
run().catch(handleError);
