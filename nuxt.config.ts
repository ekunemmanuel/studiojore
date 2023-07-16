// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/studiojore/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      title: "Studio Jore",
      script: [
        {
          src: "./loader.js",
        },
      ],
      meta: [
        {
          name: "description",
          content: "Studio Jore a brand agency where you an get the best image",
        },
      ],
      link: [
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "180x180",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
    pageTransition: { name: "page", mode: "default" },
  },
  css: ["~/assets/css/main.css", "~/assets/css/global.css"],
  modules: ["nuxt-icon", "@nuxt/image-edge"],
  experimental: {
    payloadExtraction: false,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
