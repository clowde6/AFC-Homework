import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from "dotenv"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": dotenv.config().parsed,
  }
})
