/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { QuantumJobClientOptionalParams } from "./models";

const packageName = "@azure/quantum-jobs";
const packageVersion = "1.0.0-beta.1";

export class QuantumJobClientContext extends coreHttp.ServiceClient {
  $host: string;
  subscriptionId: string;
  resourceGroupName: string;
  workspaceName: string;

  /**
   * Initializes a new instance of the QuantumJobClientContext class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000)
   * @param resourceGroupName Name of an Azure resource group.
   * @param workspaceName Name of the workspace.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    resourceGroupName: string,
    workspaceName: string,
    options?: QuantumJobClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }
    if (resourceGroupName === undefined) {
      throw new Error("'resourceGroupName' cannot be null");
    }
    if (workspaceName === undefined) {
      throw new Error("'workspaceName' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "https://quantum.azure.com";

    // Parameter assignments
    this.subscriptionId = subscriptionId;
    this.resourceGroupName = resourceGroupName;
    this.workspaceName = workspaceName;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://quantum.azure.com";
  }
}
