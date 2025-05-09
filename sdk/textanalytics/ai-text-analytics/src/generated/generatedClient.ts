/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as Parameters from "./models/parameters.js";
import * as Mappers from "./models/mappers.js";
import {
  GeneratedClientOptionalParams,
  AnalyzeOptionalParams,
  AnalyzeResponse,
  AnalyzeStatusOptionalParams,
  AnalyzeStatusResponse,
  HealthStatusOptionalParams,
  HealthStatusResponse,
  CancelHealthJobOptionalParams,
  CancelHealthJobResponse,
  MultiLanguageBatchInput,
  HealthOptionalParams,
  HealthResponse,
  EntitiesRecognitionGeneralOptionalParams,
  EntitiesRecognitionGeneralResponse,
  EntitiesRecognitionPiiOptionalParams,
  EntitiesRecognitionPiiResponse,
  EntitiesLinkingOptionalParams,
  EntitiesLinkingResponse,
  KeyPhrasesOptionalParams,
  KeyPhrasesResponse,
  LanguageBatchInput,
  LanguagesOptionalParams,
  LanguagesResponse,
  SentimentOptionalParams,
  SentimentOperationResponse
} from "./models/index.js";

/** @internal */
export class GeneratedClient extends coreClient.ServiceClient {
  endpoint: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the GeneratedClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   *                 https://westus.api.cognitive.microsoft.com).
   * @param options The parameter options
   */
  constructor(endpoint: string, options?: GeneratedClientOptionalParams) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: GeneratedClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-ai-text-analytics/5.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri:
        options.endpoint ??
        options.baseUri ??
        "{Endpoint}/text/analytics/{ApiVersion}"
    };
    super(optionsWithDefaults);

    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      const bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
      if (!bearerTokenAuthenticationPolicyFound) {
        this.pipeline.removePolicy({
          name: coreRestPipeline.bearerTokenAuthenticationPolicyName
        });
        this.pipeline.addPolicy(
          coreRestPipeline.bearerTokenAuthenticationPolicy({
            scopes: `${optionsWithDefaults.baseUri}/.default`,
            challengeCallbacks: {
              authorizeRequestOnChallenge:
                coreClient.authorizeRequestOnClaimChallenge
            }
          })
        );
      }
    }
    // Parameter assignments
    this.endpoint = endpoint;

    // Assigning values to Constant parameters
    this.apiVersion = options.apiVersion || "v3.1";
  }

  /**
   * Submit a collection of text documents for analysis. Specify one or more unique tasks to be executed.
   * @param options The options parameters.
   */
  analyze(options?: AnalyzeOptionalParams): Promise<AnalyzeResponse> {
    return this.sendOperationRequest({ options }, analyzeOperationSpec);
  }

  /**
   * Get the status of an analysis job.  A job may consist of one or more tasks.  Once all tasks are
   * completed, the job will transition to the completed state and results will be available for each
   * task.
   * @param jobId Job ID for Analyze
   * @param options The options parameters.
   */
  analyzeStatus(
    jobId: string,
    options?: AnalyzeStatusOptionalParams
  ): Promise<AnalyzeStatusResponse> {
    return this.sendOperationRequest(
      { jobId, options },
      analyzeStatusOperationSpec
    );
  }

  /**
   * Get details of the healthcare prediction job specified by the jobId.
   * @param jobId Job ID
   * @param options The options parameters.
   */
  healthStatus(
    jobId: string,
    options?: HealthStatusOptionalParams
  ): Promise<HealthStatusResponse> {
    return this.sendOperationRequest(
      { jobId, options },
      healthStatusOperationSpec
    );
  }

  /**
   * Cancel healthcare prediction job.
   * @param jobId Job ID
   * @param options The options parameters.
   */
  cancelHealthJob(
    jobId: string,
    options?: CancelHealthJobOptionalParams
  ): Promise<CancelHealthJobResponse> {
    return this.sendOperationRequest(
      { jobId, options },
      cancelHealthJobOperationSpec
    );
  }

  /**
   * Start a healthcare analysis job to recognize healthcare related entities (drugs, conditions,
   * symptoms, etc) and their relations.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  health(
    input: MultiLanguageBatchInput,
    options?: HealthOptionalParams
  ): Promise<HealthResponse> {
    return this.sendOperationRequest({ input, options }, healthOperationSpec);
  }

  /**
   * The API returns a list of general named entities in a given document. For the list of supported
   * entity types, check <a href="https://aka.ms/taner">Supported Entity Types in Text Analytics API</a>.
   * See the <a href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list
   * of enabled languages.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  entitiesRecognitionGeneral(
    input: MultiLanguageBatchInput,
    options?: EntitiesRecognitionGeneralOptionalParams
  ): Promise<EntitiesRecognitionGeneralResponse> {
    return this.sendOperationRequest(
      { input, options },
      entitiesRecognitionGeneralOperationSpec
    );
  }

  /**
   * The API returns a list of entities with personal information (\"SSN\", \"Bank Account\" etc) in the
   * document. For the list of supported entity types, check <a href="https://aka.ms/tanerpii">Supported
   * Entity Types in Text Analytics API</a>. See the <a href="https://aka.ms/talangs">Supported languages
   * in Text Analytics API</a> for the list of enabled languages.
   *
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  entitiesRecognitionPii(
    input: MultiLanguageBatchInput,
    options?: EntitiesRecognitionPiiOptionalParams
  ): Promise<EntitiesRecognitionPiiResponse> {
    return this.sendOperationRequest(
      { input, options },
      entitiesRecognitionPiiOperationSpec
    );
  }

  /**
   * The API returns a list of recognized entities with links to a well known knowledge base. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  entitiesLinking(
    input: MultiLanguageBatchInput,
    options?: EntitiesLinkingOptionalParams
  ): Promise<EntitiesLinkingResponse> {
    return this.sendOperationRequest(
      { input, options },
      entitiesLinkingOperationSpec
    );
  }

  /**
   * The API returns a list of strings denoting the key phrases in the input text. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  keyPhrases(
    input: MultiLanguageBatchInput,
    options?: KeyPhrasesOptionalParams
  ): Promise<KeyPhrasesResponse> {
    return this.sendOperationRequest(
      { input, options },
      keyPhrasesOperationSpec
    );
  }

  /**
   * The API returns the detected language and a numeric score between 0 and 1. Scores close to 1
   * indicate 100% certainty that the identified language is true. See the <a
   * href="https://aka.ms/talangs">Supported languages in Text Analytics API</a> for the list of enabled
   * languages.
   * @param input Collection of documents to analyze for language endpoint.
   * @param options The options parameters.
   */
  languages(
    input: LanguageBatchInput,
    options?: LanguagesOptionalParams
  ): Promise<LanguagesResponse> {
    return this.sendOperationRequest(
      { input, options },
      languagesOperationSpec
    );
  }

  /**
   * The API returns a detailed sentiment analysis for the input text. The analysis is done in multiple
   * levels of granularity, start from the a document level, down to sentence and key terms (targets and
   * assessments).
   * @param input Collection of documents to analyze.
   * @param options The options parameters.
   */
  sentiment(
    input: MultiLanguageBatchInput,
    options?: SentimentOptionalParams
  ): Promise<SentimentOperationResponse> {
    return this.sendOperationRequest(
      { input, options },
      sentimentOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const analyzeOperationSpec: coreClient.OperationSpec = {
  path: "/analyze",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientAnalyzeHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const analyzeStatusOperationSpec: coreClient.OperationSpec = {
  path: "/analyze/jobs/{jobId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AnalyzeJobState
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.top,
    Parameters.skip
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion, Parameters.jobId],
  headerParameters: [Parameters.accept],
  serializer
};
const healthStatusOperationSpec: coreClient.OperationSpec = {
  path: "/entities/health/jobs/{jobId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.HealthcareJobState
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.top,
    Parameters.skip
  ],
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.jobId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelHealthJobOperationSpec: coreClient.OperationSpec = {
  path: "/entities/health/jobs/{jobId}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientCancelHealthJobHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.endpoint,
    Parameters.apiVersion,
    Parameters.jobId1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const healthOperationSpec: coreClient.OperationSpec = {
  path: "/entities/health/jobs",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.GeneratedClientHealthHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.modelVersion,
    Parameters.stringIndexType,
    Parameters.loggingOptOut
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const entitiesRecognitionGeneralOperationSpec: coreClient.OperationSpec = {
  path: "/entities/recognition/general",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntitiesResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.modelVersion,
    Parameters.stringIndexType,
    Parameters.loggingOptOut
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const entitiesRecognitionPiiOperationSpec: coreClient.OperationSpec = {
  path: "/entities/recognition/pii",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PiiResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.modelVersion,
    Parameters.stringIndexType,
    Parameters.loggingOptOut,
    Parameters.domain,
    Parameters.piiCategories
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const entitiesLinkingOperationSpec: coreClient.OperationSpec = {
  path: "/entities/linking",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.EntityLinkingResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.modelVersion,
    Parameters.stringIndexType,
    Parameters.loggingOptOut
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const keyPhrasesOperationSpec: coreClient.OperationSpec = {
  path: "/keyPhrases",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.KeyPhraseResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.modelVersion,
    Parameters.loggingOptOut
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const languagesOperationSpec: coreClient.OperationSpec = {
  path: "/languages",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LanguageResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input1,
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.modelVersion,
    Parameters.loggingOptOut
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const sentimentOperationSpec: coreClient.OperationSpec = {
  path: "/sentiment",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SentimentResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.input,
  queryParameters: [
    Parameters.includeStatistics,
    Parameters.modelVersion,
    Parameters.stringIndexType,
    Parameters.loggingOptOut,
    Parameters.opinionMining
  ],
  urlParameters: [Parameters.endpoint, Parameters.apiVersion],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
