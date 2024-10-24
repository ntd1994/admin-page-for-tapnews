// https://nuxt.com/docs/api/configuration/nuxt-config
import axios from 'axios'
import { defineNuxtConfig } from "nuxt/config";
import path from 'path';

// const apiURL = process.env.BACKEND_URL || 'http://localhost:8000';
const apiURL = "https://api.tinviettoday.com";

export default defineNuxtConfig({
  alias: {
    '@frontend': path.resolve(__dirname, './')
  },
  css: [
    "@/assets/css/bootstrap.min.css",
    "@/assets/css/main.scss",
    "@/assets/css/animate.min.css",
    "@/assets/css/font-awesome.min.css",
    "@/assets/css/hover-min.css",
    "@/assets/css/ie-only.css",
    "@/assets/css/magnific-popup.css",
    "@/assets/css/main.css",
    "@/assets/css/meanmenu.min.css",
    "@/assets/css/normalize.css",
    "@/assets/css/owl.carousel.min.css",
    "@/assets/css/owl.theme.default.min.css",
    "@/assets/css/style.css",
    "vue-final-modal/style.css"
  ],
  build: {
    transpile: ['vue-toastification']
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    resolve: {
      alias: {
        '@frontend': path.resolve(__dirname, './')
      }
    }
  },
  app: {
    head: {
      title: "Tin Việt Today",
      htmlAttrs: {
        lang: "vn",
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'content-type', content: 'text-html', charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'x-ua-compatible', content: 'IE=edge' },
        { name: 'robots', content: 'index' }
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&family=Sacramento&display=swap",
        },
        { rel: 'icon', type: 'image/png', href: "/favicon.png" }
      ],
      script: [
        { src: "https://www.googletagmanager.com/gtag/js?id=G-X555F7JNQ7", tagPosition: "head" },
        {
          hid: 'gtm-script',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X555F7JNQ7');`,
          type: 'text/javascript',
          defer: true
        },
        { src: "/js/modernizr-2.8.3.min.js", tagPosition: "head" },
        { src: "/js/jquery-2.2.4.min.js", tagPosition: "bodyClose"},
        { src: "/js/plugins.js", tagPosition: "bodyClose"},
        { src: "/js/popper.js", tagPosition: "bodyClose"},
        { src: "/js/bootstrap.min.js", tagPosition: "bodyClose"},
        { src: "/js/wow.min.js", tagPosition: "bodyClose"},
        { src: "/js/owl.carousel.min.js", tagPosition: "bodyClose"},
        { src: "/js/jquery.meanmenu.min.js", tagPosition: "bodyClose"},
        { src: "/js/jquery.scrollUp.min.js", tagPosition: "bodyClose"},
        { src: "/js/jquery.counterup.min.js", tagPosition: "bodyClose"},
        { src: "/js/waypoints.min.js", tagPosition: "bodyClose"},
        { src: "/js/isotope.pkgd.min.js", tagPosition: "bodyClose"},
        { src: "/js/jquery.magnific-popup.min.js", tagPosition: "bodyClose"},
        { src: "/js/ticker.js", tagPosition: "bodyClose"},
        { src: "/js/main.js", tagPosition: "bodyClose"},
        { src: "/js/google-translate.js", tagPosition: "bodyClose"},
        { src: "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", tagPosition: "bodyClose"}
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    public: {
      apiURL,
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  ssr: true,
  routeRules: {
    '/finish-sso': { ssr: false},
  },
  modules: ["@pinia/nuxt", "@nuxt/image", '@nuxtjs/sitemap', "nuxt-simple-robots", "nuxt-schema-org"],
  schemaOrg: {
    meta: {
      host: 'https://tinviettoday.com'
    }
  },
  robots: {
    disallow: [''],
  },
  // sitemap: {
  //   cacheTtl: 1000 * 60 * 60 * 24, // 1 day
  //   gzip: true,
  //   trailingSlash: true,
  //   autoLastmod: true,
  //   urls: async () => {
  //     const sitemapUrls = await axios.get(`${apiURL}/api/sitemap`)
  //     return sitemapUrls.data.map((url: string) => ({
  //       loc: url,
  //       lastmod: new Date(),
  //       changefreq: 'daily',
  //       priority: 1,
  //     }))
  //   },
  // },
  image: {
    domains: [apiURL],
    format: ['avif', 'webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    quality: 10
  },
  axios: {
    baseURL: "https://jsonplaceholder.typicode.com",
  },
});
