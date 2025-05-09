/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  Snapshot,
  VolumeSnapshotsListByVolumeGroupOptionalParams,
  VolumeSnapshotsCreateOptionalParams,
  VolumeSnapshotsCreateResponse,
  VolumeSnapshotsDeleteOptionalParams,
  VolumeSnapshotsGetOptionalParams,
  VolumeSnapshotsGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VolumeSnapshots. */
export interface VolumeSnapshots {
  /**
   * List Snapshots in a VolumeGroup or List Snapshots by Volume (name) in a VolumeGroup using filter
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  listByVolumeGroup(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeSnapshotsListByVolumeGroupOptionalParams,
  ): PagedAsyncIterableIterator<Snapshot>;
  /**
   * Create a Volume Snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param snapshotName The name of the volume snapshot within the given volume group.
   * @param parameters Snapshot object.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    parameters: Snapshot,
    options?: VolumeSnapshotsCreateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<VolumeSnapshotsCreateResponse>,
      VolumeSnapshotsCreateResponse
    >
  >;
  /**
   * Create a Volume Snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param snapshotName The name of the volume snapshot within the given volume group.
   * @param parameters Snapshot object.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    parameters: Snapshot,
    options?: VolumeSnapshotsCreateOptionalParams,
  ): Promise<VolumeSnapshotsCreateResponse>;
  /**
   * Delete a Volume Snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param snapshotName The name of the volume snapshot within the given volume group.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    options?: VolumeSnapshotsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a Volume Snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param snapshotName The name of the volume snapshot within the given volume group.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    options?: VolumeSnapshotsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get a Volume Snapshot.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param snapshotName The name of the volume snapshot within the given volume group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    snapshotName: string,
    options?: VolumeSnapshotsGetOptionalParams,
  ): Promise<VolumeSnapshotsGetResponse>;
}
