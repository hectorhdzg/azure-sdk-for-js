/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { ConnectedClusterPatch } from "@azure/arm-hybridkubernetes";
import { ConnectedKubernetesClient } from "@azure/arm-hybridkubernetes";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to API to update certain properties of the connected cluster resource
 *
 * @summary API to update certain properties of the connected cluster resource
 * x-ms-original-file: specification/hybridkubernetes/resource-manager/Microsoft.Kubernetes/preview/2024-12-01-preview/examples/UpdateClusterByPatchExample.json
 */
async function updateClusterExample(): Promise<void> {
  const subscriptionId =
    process.env["HYBRIDKUBERNETES_SUBSCRIPTION_ID"] ||
    "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const resourceGroupName =
    process.env["HYBRIDKUBERNETES_RESOURCE_GROUP"] || "k8sc-rg";
  const clusterName = "testCluster";
  const connectedClusterPatch: ConnectedClusterPatch = {
    properties: {
      azureHybridBenefit: "NotApplicable",
      distribution: "AKS",
      distributionVersion: "1.0",
    },
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ConnectedKubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusterOperations.update(
    resourceGroupName,
    clusterName,
    connectedClusterPatch,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateClusterExample();
}

main().catch(console.error);
