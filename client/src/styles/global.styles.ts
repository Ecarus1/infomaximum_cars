/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*": {
    boxSizing: "border-box",
  } as const,
  "html, body, #root": {
    margin: "0 auto",
    padding: 0,
    height: "100%",
    maxWidth: "1920px",
  },
  "h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
};
