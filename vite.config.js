import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://kmazou.github.io/final_project_react_front_end",
  plugins: [react()],
})
