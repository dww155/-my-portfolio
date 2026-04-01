import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Must match GitHub Pages project URL: https://<user>.github.io/<repo>/
  base: "/my-portfolio/",
});
