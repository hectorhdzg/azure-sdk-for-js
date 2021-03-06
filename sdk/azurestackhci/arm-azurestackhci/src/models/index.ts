/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };

/**
 * Cluster node details.
 */
export interface ClusterNode {
  /**
   * Name of the cluster node.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * Id of the node in the cluster.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: number;
  /**
   * Manufacturer of the cluster node hardware.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly manufacturer?: string;
  /**
   * Model name of the cluster node hardware.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly model?: string;
  /**
   * Operating system running on the cluster node.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osName?: string;
  /**
   * Version of the operating system running on the cluster node.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly osVersion?: string;
  /**
   * Immutable id of the cluster node.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly serialNumber?: string;
  /**
   * Number of physical cores on the cluster node.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly coreCount?: number;
  /**
   * Total available memory on the cluster node (in GiB).
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly memoryInGiB?: number;
}

/**
 * Properties reported by cluster agent.
 */
export interface ClusterReportedProperties {
  /**
   * Name of the on-prem cluster connected to this resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusterName?: string;
  /**
   * Unique id generated by the on-prem cluster.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusterId?: string;
  /**
   * Version of the cluster software.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly clusterVersion?: string;
  /**
   * List of nodes reported by the cluster.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nodes?: ClusterNode[];
  /**
   * Last time the cluster reported the data.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastUpdated?: Date;
}

/**
 * An interface representing Resource.
 */
export interface Resource extends BaseResource {
  /**
   * Fully qualified resource Id for the resource. Ex -
   * /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * The name of the resource
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly name?: string;
  /**
   * The type of the resource. Ex- Microsoft.Compute/virtualMachines or
   * Microsoft.Storage/storageAccounts.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
}

/**
 * The resource model definition for a ARM tracked top level resource
 */
export interface TrackedResource extends Resource {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
  /**
   * The geo-location where the resource lives
   */
  location: string;
}

/**
 * Cluster details.
 */
export interface Cluster extends TrackedResource {
  /**
   * Provisioning state. Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Accepted',
   * 'Provisioning'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * Status of the cluster agent. Possible values include: 'NotYetRegistered', 'ConnectedRecently',
   * 'NotConnectedRecently', 'Disconnected', 'Error'
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly status?: Status;
  /**
   * Unique, immutable resource id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly cloudId?: string;
  /**
   * App id of cluster AAD identity.
   */
  aadClientId: string;
  /**
   * Tenant id of cluster AAD identity.
   */
  aadTenantId: string;
  /**
   * Properties reported by cluster agent.
   */
  reportedProperties?: ClusterReportedProperties;
  /**
   * Number of days remaining in the trial period.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly trialDaysRemaining?: number;
  /**
   * Type of billing applied to the resource.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly billingModel?: string;
  /**
   * First cluster sync timestamp.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly registrationTimestamp?: Date;
  /**
   * Most recent cluster sync timestamp.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastSyncTimestamp?: Date;
  /**
   * Most recent billing meter timestamp.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastBillingTimestamp?: Date;
}

/**
 * Cluster details to update.
 */
export interface ClusterUpdate {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * Operation display payload
 */
export interface OperationDisplay {
  /**
   * Resource provider of the operation
   */
  provider?: string;
  /**
   * Resource of the operation
   */
  resource?: string;
  /**
   * Localized friendly name for the operation
   */
  operation?: string;
  /**
   * Localized friendly description for the operation
   */
  description?: string;
}

/**
 * Operation detail payload
 */
export interface OperationDetail {
  /**
   * Name of the operation
   */
  name?: string;
  /**
   * Indicates whether the operation is a data action
   */
  isDataAction?: boolean;
  /**
   * Display of the operation
   */
  display?: OperationDisplay;
  /**
   * Origin of the operation
   */
  origin?: string;
  /**
   * Properties of the operation
   */
  properties?: any;
}

/**
 * Available operations of the service
 */
export interface AvailableOperations {
  /**
   * Collection of available operation details
   */
  value?: OperationDetail[];
  /**
   * URL client should use to fetch the next page (per server side paging).
   * It's null for now, added for future use.
   */
  nextLink?: string;
}

/**
 * The resource model definition for a ARM proxy resource. It will have everything other than
 * required location and tags
 */
export interface ProxyResource extends Resource {
}

/**
 * The resource model definition for a Azure Resource Manager resource with an etag.
 */
export interface AzureEntityResource extends Resource {
  /**
   * Resource Etag.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly etag?: string;
}

/**
 * The resource management error additional info.
 */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly type?: string;
  /**
   * The additional info.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly info?: any;
}

/**
 * The error object.
 */
export interface ErrorResponseError {
  /**
   * The error code.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly code?: string;
  /**
   * The error message.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly message?: string;
  /**
   * The error target.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly target?: string;
  /**
   * The error details.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly details?: ErrorResponse[];
  /**
   * The error additional info.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/**
 * The resource management error response.
 */
export interface ErrorResponse {
  /**
   * The error object.
   */
  error?: ErrorResponseError;
}

/**
 * Optional Parameters.
 */
export interface ClustersUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * Resource tags.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * An interface representing AzureStackHCIClientOptions.
 */
export interface AzureStackHCIClientOptions extends AzureServiceClientOptions {
  baseUri?: string;
}

/**
 * @interface
 * List of clusters.
 * @extends Array<Cluster>
 */
export interface ClusterList extends Array<Cluster> {
  /**
   * Link to the next set of results.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Succeeded', 'Failed', 'Canceled', 'Accepted', 'Provisioning'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Succeeded' | 'Failed' | 'Canceled' | 'Accepted' | 'Provisioning';

/**
 * Defines values for Status.
 * Possible values include: 'NotYetRegistered', 'ConnectedRecently', 'NotConnectedRecently',
 * 'Disconnected', 'Error'
 * @readonly
 * @enum {string}
 */
export type Status = 'NotYetRegistered' | 'ConnectedRecently' | 'NotConnectedRecently' | 'Disconnected' | 'Error';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = AvailableOperations & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: AvailableOperations;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ClustersListResponse = ClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClusterList;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ClustersListByResourceGroupResponse = ClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClusterList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ClustersGetResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the create operation.
 */
export type ClustersCreateResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ClustersUpdateResponse = Cluster & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Cluster;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ClustersListNextResponse = ClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClusterList;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ClustersListByResourceGroupNextResponse = ClusterList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClusterList;
    };
};
