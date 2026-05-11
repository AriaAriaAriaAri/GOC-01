// 把 `/assets/foo.png` 这类绝对路径转换为带 Vite `base` 前缀的真实路径。
// 开发环境 BASE_URL = '/'，生产构建时为 '/GOC-01/'，部署到子路径不会 404。
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL
  const clean = path.startsWith('/') ? path.slice(1) : path
  return base + clean
}
