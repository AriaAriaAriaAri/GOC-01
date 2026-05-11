import type { MouseEvent } from 'react'
import { useLang } from '../i18n'
import { asset } from '../lib/asset'
import LanguageSwitcher from './LanguageSwitcher'

// 临时开关：暂时隐藏顶部导航菜单中的占位项。
// 后续版本恢复内容时改成 true 即可。
const SHOW_NAV = false

type Route = 'home' | 'about'

export default function Header({ route }: { route?: Route }) {
  const { t } = useLang()

  // 通用：跳到首页中某个 section，无论当前在哪一页都正确处理
  const handleSectionClick =
    (sectionId: string) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      const scrollToSection = () => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      // 当前在 About 页：先切回首页，等待重新渲染后再滚动
      if (window.location.hash.startsWith('#/about')) {
        window.location.hash = '#/'
        // 双层 rAF 确保 home 已渲染、布局稳定后再滚动
        requestAnimationFrame(() => requestAnimationFrame(scrollToSection))
      } else {
        scrollToSection()
      }
    }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
      <div className="mx-auto flex h-[58px] max-w-[1280px] items-center justify-between px-6">
        <a href="#/" className="flex items-center gap-2">
          <img
            src={asset('/assets/logo-goc01.svg')}
            alt="GOC 01"
            className="h-4 w-auto"
          />
        </a>

        <nav className="flex items-center gap-1 text-sm text-white/70">
          {SHOW_NAV && (
            <>
              {['Company', 'Resources', 'Help', 'Docs', 'AI'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="px-3 py-2 rounded-md hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>{item}</span>
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    className="opacity-60"
                  >
                    <path
                      d="M2.5 4L5 6.5L7.5 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              ))}
            </>
          )}

          <a
            href="#features"
            onClick={handleSectionClick('features')}
            className="px-3 py-2 rounded-md text-white/70 hover:text-white transition-colors"
          >
            {t.nav.features}
          </a>

          <a
            href="#pricing"
            onClick={handleSectionClick('pricing')}
            className="px-3 py-2 rounded-md text-white/70 hover:text-white transition-colors"
          >
            {t.nav.pricing}
          </a>

          <a
            href="#/about"
            aria-current={route === 'about' ? 'page' : undefined}
            className={`px-3 py-2 rounded-md transition-colors ${
              route === 'about' ? 'text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            {t.nav.aboutUs}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#"
            className="cta-glow flex h-10 items-center justify-center gap-2 rounded-2xl border-2 border-white/5 px-[18px] text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
          >
            {t.nav.startFree} →
          </a>
        </div>
      </div>
    </header>
  )
}
