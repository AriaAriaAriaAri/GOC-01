import { useEffect, useRef, useState } from 'react'
import { useLang, type Lang } from '../i18n'

const OPTIONS: Array<{ value: Lang; key: 'en' | 'zh' }> = [
  { value: 'en', key: 'en' },
  { value: 'zh', key: 'zh' },
]

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // 点击外部 / 按 Esc 关闭 dropdown
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const currentKey: 'en' | 'zh' = lang === 'zh' ? 'zh' : 'en'

  return (
    <div ref={ref} className="relative flex items-center gap-2">
      <span
        aria-hidden
        className="hidden text-[12px] font-medium uppercase tracking-[0.08em] text-white/50 sm:inline"
      >
        {t.lang.label}
      </span>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.lang.label}: ${t.lang.toggleLabel}`}
        className="flex h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 text-[13px] text-white/80 transition-colors hover:bg-white/[0.06] hover:text-white"
      >
        {/* globe icon */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
          <path
            d="M1.5 7H12.5M7 1.5C8.5 3.5 9 5 9 7C9 9 8.5 10.5 7 12.5M7 1.5C5.5 3.5 5 5 5 7C5 9 5.5 10.5 7 12.5"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{t.lang[currentKey]}</span>
        {/* chevron */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path
            d="M2 4l3 3 3-3"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-[calc(100%+8px)] z-50 min-w-[160px] overflow-hidden rounded-xl border border-white/10 bg-[#0b0e14]/95 p-1 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          {OPTIONS.map((opt) => {
            const active = lang === opt.value
            return (
              <li key={opt.value} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(opt.value)
                    setOpen(false)
                  }}
                  className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${
                    active
                      ? 'bg-white/[0.06] text-white'
                      : 'text-white/70 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <span>{t.lang[opt.key]}</span>
                  {active && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6L5 8.5L9.5 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
