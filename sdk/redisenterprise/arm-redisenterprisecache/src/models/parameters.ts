/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  Cluster as ClusterMapper,
  ClusterUpdate as ClusterUpdateMapper,
  Database as DatabaseMapper,
  DatabaseUpdate as DatabaseUpdateMapper,
  RegenerateKeyParameters as RegenerateKeyParametersMapper,
  ImportClusterParameters as ImportClusterParametersMapper,
  ExportClusterParameters as ExportClusterParametersMapper,
  ForceUnlinkParameters as ForceUnlinkParametersMapper,
  ForceLinkParameters as ForceLinkParametersMapper,
  FlushParameters as FlushParametersMapper,
  AccessPolicyAssignment as AccessPolicyAssignmentMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2025-05-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const location: OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "location",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const operationId: OperationURLParameter = {
  parameterPath: "operationId",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "operationId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1,
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterMapper,
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^(?=.{1,60}$)[A-Za-z0-9]+(-[A-Za-z0-9]+)*$"),
    },
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterUpdateMapper,
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabaseMapper,
};

export const databaseName: OperationURLParameter = {
  parameterPath: "databaseName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^(?=.{1,60}$)[A-Za-z0-9]+(-[A-Za-z0-9]+)*$"),
    },
    serializedName: "databaseName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: DatabaseUpdateMapper,
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: RegenerateKeyParametersMapper,
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: ImportClusterParametersMapper,
};

export const parameters6: OperationParameter = {
  parameterPath: "parameters",
  mapper: ExportClusterParametersMapper,
};

export const parameters7: OperationParameter = {
  parameterPath: "parameters",
  mapper: ForceUnlinkParametersMapper,
};

export const parameters8: OperationParameter = {
  parameterPath: "parameters",
  mapper: ForceLinkParametersMapper,
};

export const parameters9: OperationParameter = {
  parameterPath: ["options", "parameters"],
  mapper: FlushParametersMapper,
};

export const parameters10: OperationParameter = {
  parameterPath: "parameters",
  mapper: AccessPolicyAssignmentMapper,
};

export const accessPolicyAssignmentName: OperationURLParameter = {
  parameterPath: "accessPolicyAssignmentName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9]{1,60}$"),
    },
    serializedName: "accessPolicyAssignmentName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: PrivateEndpointConnectionMapper,
};
