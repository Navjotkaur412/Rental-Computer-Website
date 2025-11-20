import { defineConfig } from 'astro/config';

export default defineConfig({
  // NOTE: do NOT set a "site" value for local dev unless you have a real URL.
  vite: {
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  }
});
