import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://GabrielErani.github.io/PortFolioVite/",
  plugins: [react()],  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
