// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: "/studiojore/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      charset: "utf-16",
      title: "STUDIO JORE",
      script: [
        {
          src: "./loader.js",
        },
      ],

      meta: [
        {
          name: "description",
          property: "og:description",
          content: "STUDIO JORE is a leading design, photography, and marketing agency that offers innovative creative solutions for businesses. Elevate your brand, drive growth, and tell your unique story through captivating visuals and strategic marketing campaigns.",
        },
        {
          name: "keywords",
          content: "design agency, photography, marketing, branding, social media marketing",
        },
        {
          name: "author",
          content: "STUDIO JORE",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          "http-equiv": "X-UA-Compatible",
          content: "ie=edge",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",

        },
        {
          name: "charset",
          content: "UTF-8",
        },
        {
          name: "title",
          content: "STUDIO JORE - Design, Photography, and Marketing Agency",
          property: "og:title",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://studiojore.vercel.app/",
        },
        {
          property: "og:image",
          content: "https://studiojore.vercel.app/logo-large.png",
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
