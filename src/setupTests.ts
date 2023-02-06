import { expect, afterEach } from "vitest";
import "whatwg-fetch";
import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

expect.extend(matchers);

afterEach(cleanup);
