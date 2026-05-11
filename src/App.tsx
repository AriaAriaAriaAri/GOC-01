import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

type Route = 'home' | 'about'

function getRoute(): Route {
  if (typeof window === 'undefined') return 'home'
  const hash = window.location.hash || ''
  return hash.startsWith('#/about') ? 'about' : 'home'
}

export default function App() {
  const [route, setRoute] = useState<Route>(getRoute)

  useEffect(() => {
    const onHash = () => setRoute(getRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // 路由切换后回到顶部，避免上一页的滚动位置带过来
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header route={route} />
      {route === 'about' ? <About /> : <Home />}
      <Footer />
    </div>
  )
}
