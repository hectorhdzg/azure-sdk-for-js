/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { DeletedWorkbooks } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApplicationInsightsManagementClient } from "../applicationInsightsManagementClient.js";
import {
  DeletedWorkbook,
  DeletedWorkbooksListBySubscriptionNextOptionalParams,
  DeletedWorkbooksListBySubscriptionOptionalParams,
  DeletedWorkbooksListBySubscriptionResponse,
  DeletedWorkbooksListBySubscriptionNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedWorkbooks operations. */
export class DeletedWorkbooksImpl implements DeletedWorkbooks {
  private readonly client: ApplicationInsightsManagementClient;

  /**
   * Initialize a new instance of the class DeletedWorkbooks class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationInsightsManagementClient) {
    this.client = client;
  }

  /**
   * Get all recently deleted Workbooks in a specified subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DeletedWorkbooksListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<DeletedWorkbook> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listBySubscriptionPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: DeletedWorkbooksListBySubscriptionOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<DeletedWorkbook[]> {
    let result: DeletedWorkbooksListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: DeletedWorkbooksListBySubscriptionOptionalParams,
  ): AsyncIterableIterator<DeletedWorkbook> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all recently deleted Workbooks in a specified subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DeletedWorkbooksListBySubscriptionOptionalParams,
  ): Promise<DeletedWorkbooksListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec,
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DeletedWorkbooksListBySubscriptionNextOptionalParams,
  ): Promise<DeletedWorkbooksListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/deletedWorkbooks",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWorkbooksListResult,
    },
    default: {
      bodyMapper: Mappers.DeletedWorkbookError,
    },
  },
  queryParameters: [
    Parameters.tags,
    Parameters.category1,
    Parameters.apiVersion8,
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeletedWorkbooksListResult,
    },
    default: {
      bodyMapper: Mappers.DeletedWorkbookError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
