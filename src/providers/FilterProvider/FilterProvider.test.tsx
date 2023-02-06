import { ReactNode } from "react";
import { act, render, renderHook, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { FilterProvider, useFilter } from ".";

it("renders", () => {
  render(<FilterProvider>Hello, world!</FilterProvider>);
  expect(screen.getByText(/hello, world!/i)).toBeInTheDocument();
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <FilterProvider>{children}</FilterProvider>
);

it("uses the correct initial values", () => {
  const { result } = renderHook(() => useFilter(), { wrapper });
  expect(result.current.filter).toBe("");
});

it("updates the filter", () => {
  const { result } = renderHook(() => useFilter(), { wrapper });
  act(() => {
    result.current.setFilter("test");
  });
  expect(result.current.filter).toBe("test");
});
