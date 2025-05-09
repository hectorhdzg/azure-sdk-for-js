/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  StorageTargetSpaceAllocation,
  CachesSpaceAllocationOptionalParams,
  StorageCacheManagementClient,
} from "@azure/arm-storagecache";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update cache space allocation.
 *
 * @summary Update cache space allocation.
 * x-ms-original-file: specification/storagecache/resource-manager/Microsoft.StorageCache/stable/2024-03-01/examples/SpaceAllocation_Post.json
 */
async function spaceAllocationPost(): Promise<void> {
  const subscriptionId =
    process.env["STORAGECACHE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["STORAGECACHE_RESOURCE_GROUP"] || "scgroup";
  const cacheName = "sc1";
  const spaceAllocation: StorageTargetSpaceAllocation[] = [
    { name: "st1", allocationPercentage: 25 },
    { name: "st2", allocationPercentage: 50 },
    { name: "st3", allocationPercentage: 25 },
  ];
  const options: CachesSpaceAllocationOptionalParams = { spaceAllocation };
  const credential = new DefaultAzureCredential();
  const client = new StorageCacheManagementClient(credential, subscriptionId);
  const result = await client.caches.beginSpaceAllocationAndWait(
    resourceGroupName,
    cacheName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  spaceAllocationPost();
}

main().catch(console.error);
