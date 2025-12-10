// nuxt.config.ts or nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],

  components: {
    global: true,
    dirs: ["~/components"],
  },

  app: {
    head: {
      title: "Varnish Dashboard - Management System",
      link: [
        // Modern browsers - SVG favicon (preferred) - Arrow icon
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        // Fallback for older browsers
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        // Apple devices
        { rel: "apple-touch-icon", href: "/favicon.svg" },
      ],
      meta: [
        { name: "theme-color", content: "#0C1E35" },
        { name: "msapplication-TileColor", content: "#182230" },
      ],
      bodyAttrs: {
        style: 'background-color: #0C1E35 !important; margin: 0; padding: 0;',
      },
    },
  },

  // 👇 Add this block
  nitro: {
    preset: "vercel",
  },

  runtimeConfig: {
    // Server-side only (not exposed to client) - SECURE
    // These are only accessible on the server, never exposed to the browser
    pageSpeedApiKey: process.env.PAGESPEED_API_KEY || '',
    webPageTestApiKey: process.env.WEBPAGETEST_API_KEY || '',
    
    public: {
      // Public configuration (safe to expose to client)
      // API base URL - can be accessed as config.public.apiBase
      apiBase: process.env.API_BASE_URL || process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:5001',
      // Cloudinary configuration (public keys are safe)
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME ?? '',
      cloudinaryUploadPreset: process.env.CLOUDINARY_UPLOAD_PRESET ?? '',
      // NOTE: API keys should NEVER be in public config for security
      // All API calls should go through server-side API routes
    },
  },
});