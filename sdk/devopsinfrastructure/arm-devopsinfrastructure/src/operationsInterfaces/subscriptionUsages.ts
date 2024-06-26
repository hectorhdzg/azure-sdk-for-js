/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  Quota,
  SubscriptionUsagesListByLocationOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SubscriptionUsages. */
export interface SubscriptionUsages {
  /**
   * List Quota resources by subscription ID
   * @param locationName Name of the location.
   * @param options The options parameters.
   */
  listByLocation(
    locationName: string,
    options?: SubscriptionUsagesListByLocationOptionalParams,
  ): PagedAsyncIterableIterator<Quota>;
}
