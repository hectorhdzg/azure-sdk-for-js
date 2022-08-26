/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SourceControlSyncJobStream,
  SourceControlSyncJobStreamsListBySyncJobOptionalParams,
  SourceControlSyncJobStreamsGetOptionalParams,
  SourceControlSyncJobStreamsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SourceControlSyncJobStreams. */
export interface SourceControlSyncJobStreams {
  /**
   * Retrieve a list of sync job streams identified by sync job id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param sourceControlSyncJobId The source control sync job id.
   * @param options The options parameters.
   */
  listBySyncJob(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    options?: SourceControlSyncJobStreamsListBySyncJobOptionalParams
  ): PagedAsyncIterableIterator<SourceControlSyncJobStream>;
  /**
   * Retrieve a sync job stream identified by stream id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param sourceControlName The source control name.
   * @param sourceControlSyncJobId The source control sync job id.
   * @param streamId The id of the sync job stream.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    automationAccountName: string,
    sourceControlName: string,
    sourceControlSyncJobId: string,
    streamId: string,
    options?: SourceControlSyncJobStreamsGetOptionalParams
  ): Promise<SourceControlSyncJobStreamsGetResponse>;
}