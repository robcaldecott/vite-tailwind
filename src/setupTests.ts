import { vi, expect, beforeAll, afterEach, afterAll } from "vitest";
import "whatwg-fetch";
import matchers from "@testing-library/jest-dom/matchers";
import { setGlobalConfig } from "@storybook/testing-react";
import { cleanup } from "@testing-library/react";
import { setLogger } from "react-query";
import { getWorker } from "msw-storybook-addon";
import * as globalStorybookConfig from "../.storybook/preview";

Object.defineProperty(window, "scrollTo", { value: () => {}, writable: true });
setGlobalConfig(globalStorybookConfig);

expect.extend(matchers);

beforeAll(() => {
  setLogger({
    error: () => vi.fn(),
    log: (...args) => console.log(...args),
    warn: (...args) => console.log(...args),
  });
});

afterEach(cleanup);

// @ts-ignore
afterAll(() => getWorker().close());
