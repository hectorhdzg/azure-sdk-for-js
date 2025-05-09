/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  RestorableDatabaseAccountGetResult,
  RestorableDatabaseAccountsListByLocationOptionalParams,
  RestorableDatabaseAccountsListOptionalParams,
  RestorableDatabaseAccountsGetByLocationOptionalParams,
  RestorableDatabaseAccountsGetByLocationResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a RestorableDatabaseAccounts. */
export interface RestorableDatabaseAccounts {
  /**
   * Lists all the restorable Azure Cosmos DB database accounts available under the subscription and in a
   * region.  This call requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read'
   * permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param options The options parameters.
   */
  listByLocation(
    location: string,
    options?: RestorableDatabaseAccountsListByLocationOptionalParams,
  ): PagedAsyncIterableIterator<RestorableDatabaseAccountGetResult>;
  /**
   * Lists all the restorable Azure Cosmos DB database accounts available under the subscription. This
   * call requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read' permission.
   * @param options The options parameters.
   */
  list(
    options?: RestorableDatabaseAccountsListOptionalParams,
  ): PagedAsyncIterableIterator<RestorableDatabaseAccountGetResult>;
  /**
   * Retrieves the properties of an existing Azure Cosmos DB restorable database account.  This call
   * requires 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/read/*' permission.
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  getByLocation(
    location: string,
    instanceId: string,
    options?: RestorableDatabaseAccountsGetByLocationOptionalParams,
  ): Promise<RestorableDatabaseAccountsGetByLocationResponse>;
}
