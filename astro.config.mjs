import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080
  }
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@import "src/scss/style.scss";`
  //       }
  //     }
  //   }
  // },
  // experimental: {
  //   router: 'spa'
  // }
  ,
  output: "server",
  adapter: vercel()
});