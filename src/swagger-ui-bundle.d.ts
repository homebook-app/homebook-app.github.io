declare module 'swagger-ui-dist/swagger-ui-bundle' {
  interface SwaggerUIBundleOptions {
    url: string;
    dom_id: string;
    deepLinking?: boolean;
    presets?: unknown[];
    layout?: string;
  }

  interface SwaggerUIBundleStatic {
    (options: SwaggerUIBundleOptions): unknown;
    presets: {
      apis: unknown;
    };
  }

  const SwaggerUIBundle: SwaggerUIBundleStatic;
  export default SwaggerUIBundle;
}
