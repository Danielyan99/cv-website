import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement matchMedia — provide a stub so useReducedMotion
// and any other matchMedia-based code can run in tests. Individual tests
// override window.matchMedia when they need a specific value.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList;
}
