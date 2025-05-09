/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  MdeOnboardingsListOptionalParams,
  MdeOnboardingsListResponse,
  MdeOnboardingsGetOptionalParams,
  MdeOnboardingsGetResponse,
} from "../models/index.js";

/** Interface representing a MdeOnboardings. */
export interface MdeOnboardings {
  /**
   * The configuration or data needed to onboard the machine to MDE
   * @param options The options parameters.
   */
  list(
    options?: MdeOnboardingsListOptionalParams,
  ): Promise<MdeOnboardingsListResponse>;
  /**
   * The default configuration or data needed to onboard the machine to MDE
   * @param options The options parameters.
   */
  get(
    options?: MdeOnboardingsGetOptionalParams,
  ): Promise<MdeOnboardingsGetResponse>;
}
