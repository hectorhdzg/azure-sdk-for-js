/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { WorkspacePolicyFragment } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  PolicyFragmentContract,
  WorkspacePolicyFragmentListByServiceNextOptionalParams,
  WorkspacePolicyFragmentListByServiceOptionalParams,
  WorkspacePolicyFragmentListByServiceResponse,
  WorkspacePolicyFragmentGetEntityTagOptionalParams,
  WorkspacePolicyFragmentGetEntityTagResponse,
  WorkspacePolicyFragmentGetOptionalParams,
  WorkspacePolicyFragmentGetResponse,
  WorkspacePolicyFragmentCreateOrUpdateOptionalParams,
  WorkspacePolicyFragmentCreateOrUpdateResponse,
  WorkspacePolicyFragmentDeleteOptionalParams,
  WorkspacePolicyFragmentListReferencesOptionalParams,
  WorkspacePolicyFragmentListReferencesResponse,
  WorkspacePolicyFragmentListByServiceNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing WorkspacePolicyFragment operations. */
export class WorkspacePolicyFragmentImpl implements WorkspacePolicyFragment {
  private readonly client: ApiManagementClient;

  /**
   * Initialize a new instance of the class WorkspacePolicyFragment class.
   * @param client Reference to the service client
   */
  constructor(client: ApiManagementClient) {
    this.client = client;
  }

  /**
   * Gets all policy fragments defined within a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  public listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspacePolicyFragmentListByServiceOptionalParams,
  ): PagedAsyncIterableIterator<PolicyFragmentContract> {
    const iter = this.listByServicePagingAll(
      resourceGroupName,
      serviceName,
      workspaceId,
      options,
    );
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
        return this.listByServicePagingPage(
          resourceGroupName,
          serviceName,
          workspaceId,
          options,
          settings,
        );
      },
    };
  }

  private async *listByServicePagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspacePolicyFragmentListByServiceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<PolicyFragmentContract[]> {
    let result: WorkspacePolicyFragmentListByServiceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByService(
        resourceGroupName,
        serviceName,
        workspaceId,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByServiceNext(
        resourceGroupName,
        serviceName,
        workspaceId,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByServicePagingAll(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspacePolicyFragmentListByServiceOptionalParams,
  ): AsyncIterableIterator<PolicyFragmentContract> {
    for await (const page of this.listByServicePagingPage(
      resourceGroupName,
      serviceName,
      workspaceId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets all policy fragments defined within a workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param options The options parameters.
   */
  private _listByService(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    options?: WorkspacePolicyFragmentListByServiceOptionalParams,
  ): Promise<WorkspacePolicyFragmentListByServiceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, options },
      listByServiceOperationSpec,
    );
  }

  /**
   * Gets the entity state (Etag) version of a policy fragment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param id A resource identifier.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    id: string,
    options?: WorkspacePolicyFragmentGetEntityTagOptionalParams,
  ): Promise<WorkspacePolicyFragmentGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, id, options },
      getEntityTagOperationSpec,
    );
  }

  /**
   * Gets a policy fragment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param id A resource identifier.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    id: string,
    options?: WorkspacePolicyFragmentGetOptionalParams,
  ): Promise<WorkspacePolicyFragmentGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, id, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a policy fragment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param id A resource identifier.
   * @param parameters The policy fragment contents to apply.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    id: string,
    parameters: PolicyFragmentContract,
    options?: WorkspacePolicyFragmentCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<WorkspacePolicyFragmentCreateOrUpdateResponse>,
      WorkspacePolicyFragmentCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<WorkspacePolicyFragmentCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        serviceName,
        workspaceId,
        id,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      WorkspacePolicyFragmentCreateOrUpdateResponse,
      OperationState<WorkspacePolicyFragmentCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a policy fragment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param id A resource identifier.
   * @param parameters The policy fragment contents to apply.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    id: string,
    parameters: PolicyFragmentContract,
    options?: WorkspacePolicyFragmentCreateOrUpdateOptionalParams,
  ): Promise<WorkspacePolicyFragmentCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      serviceName,
      workspaceId,
      id,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a policy fragment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param id A resource identifier.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    id: string,
    ifMatch: string,
    options?: WorkspacePolicyFragmentDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, id, ifMatch, options },
      deleteOperationSpec,
    );
  }

  /**
   * Lists policy resources that reference the policy fragment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param id A resource identifier.
   * @param options The options parameters.
   */
  listReferences(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    id: string,
    options?: WorkspacePolicyFragmentListReferencesOptionalParams,
  ): Promise<WorkspacePolicyFragmentListReferencesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, id, options },
      listReferencesOperationSpec,
    );
  }

  /**
   * ListByServiceNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of the API Management service.
   * @param workspaceId Workspace identifier. Must be unique in the current API Management service
   *                    instance.
   * @param nextLink The nextLink from the previous successful call to the ListByService method.
   * @param options The options parameters.
   */
  private _listByServiceNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceId: string,
    nextLink: string,
    options?: WorkspacePolicyFragmentListByServiceNextOptionalParams,
  ): Promise<WorkspacePolicyFragmentListByServiceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serviceName, workspaceId, nextLink, options },
      listByServiceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/policyFragments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyFragmentCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.top,
    Parameters.skip,
    Parameters.orderby,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getEntityTagOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/policyFragments/{id}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.WorkspacePolicyFragmentGetEntityTagHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.id,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/policyFragments/{id}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyFragmentContract,
      headersMapper: Mappers.WorkspacePolicyFragmentGetHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.format2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.id,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/policyFragments/{id}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyFragmentContract,
      headersMapper: Mappers.WorkspacePolicyFragmentCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.PolicyFragmentContract,
      headersMapper: Mappers.WorkspacePolicyFragmentCreateOrUpdateHeaders,
    },
    202: {
      bodyMapper: Mappers.PolicyFragmentContract,
      headersMapper: Mappers.WorkspacePolicyFragmentCreateOrUpdateHeaders,
    },
    204: {
      bodyMapper: Mappers.PolicyFragmentContract,
      headersMapper: Mappers.WorkspacePolicyFragmentCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters65,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.id,
    Parameters.workspaceId,
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
  ],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/policyFragments/{id}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.id,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifMatch1],
  serializer,
};
const listReferencesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/workspaces/{workspaceId}/policyFragments/{id}/listReferences",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.top, Parameters.skip],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.serviceName,
    Parameters.id,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyFragmentCollection,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.serviceName,
    Parameters.workspaceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
