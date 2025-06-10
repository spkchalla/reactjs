import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "App by SPK",
        short_name: "SPKUMAR",
        description: "Full Stack Learning Management",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/images (1).jpeg",
            sizes: "192x192",
            type: "image/jpeg",
          },
          {
            src: "/icons/images.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
          },
          {
            src: "/icons/images.jpeg",
            sizes: "512x512",
            type: "image/jpeg",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
});