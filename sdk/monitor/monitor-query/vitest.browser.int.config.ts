// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.browser.shared.config.js";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 1200000,
      hookTimeout: 1200000,
      include: [
        "dist-test/browser/test/internal/**/*.spec.js",
        "dist-test/browser/test/public/**/*.spec.js",
      ],
    },
  }),
);
