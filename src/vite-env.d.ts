/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Umami Cloud website ID. Analytics stay off when it's not set. */
  readonly VITE_UMAMI_WEBSITE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
