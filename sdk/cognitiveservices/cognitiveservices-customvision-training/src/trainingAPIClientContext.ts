/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

const packageName = "@azure/cognitiveservices-customvision-training";
const packageVersion = "5.2.0";

export class TrainingAPIClientContext extends msRest.ServiceClient {
  endpoint: string;
  credentials: msRest.ServiceClientCredentials;

  /**
   * Initializes a new instance of the TrainingAPIClientContext class.
   * @param endpoint Supported Cognitive Services endpoints.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, endpoint: string, options?: msRest.ServiceClientOptions) {
    if (endpoint == undefined) {
      throw new Error("'endpoint' cannot be null.");
    }
    if (credentials == undefined) {
      throw new Error("'credentials' cannot be null.");
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.baseUri = "{Endpoint}/customvision/v3.4-preview/training";
    this.requestContentType = "application/json; charset=utf-8";
    this.endpoint = endpoint;
    this.credentials = credentials;
  }
}
