import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), viteStaticCopy({
    targets: [
      {
        src: 'src/assets',
        dest: '' // Copy to the root of the dist directory
      }
    ]
  })],
   build: {
    outDir: "dist",
  },
  server: {
    host: true, // or '0.0.0.0'
    port: 5173
  },
   base: "/",
})

