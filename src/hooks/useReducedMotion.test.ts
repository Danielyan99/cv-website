import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useReducedMotion } from "./useReducedMotion";

function mockMatchMedia(matches: boolean) {
  const listeners = new Set<(event: MediaQueryListEvent) => void>();
  const mql = {
    matches,
    media: "(prefers-reduced-motion: reduce)",
    addEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) =>
      listeners.add(listener),
    removeEventListener: (_: string, listener: (event: MediaQueryListEvent) => void) =>
      listeners.delete(listener),
  } as unknown as MediaQueryList;

  window.matchMedia = vi.fn().mockReturnValue(mql);

  return {
    triggerChange: (nextMatches: boolean) => {
      listeners.forEach((listener) => listener({ matches: nextMatches } as MediaQueryListEvent));
    },
  };
}

describe("useReducedMotion", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("reflects the OS setting off by default", () => {
    mockMatchMedia(false);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("reflects the OS setting on when the media query already matches", () => {
    mockMatchMedia(true);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });

  it("updates live when the OS setting changes", () => {
    const { triggerChange } = mockMatchMedia(false);
    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);

    act(() => {
      triggerChange(true);
    });
    expect(result.current).toBe(true);
  });
});
