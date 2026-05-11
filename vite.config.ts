import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// 生产构建时（GitHub Pages 子路径），把 base 设为 '/GOC-01/'；
// 本地开发仍然走根路径，避免 dev server 多一层前缀。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/GOC-01/' : '/',
  plugins: [react(), tailwindcss()],
}))
