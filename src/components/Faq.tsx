import { useState } from 'react'
import { useLang } from '../i18n'

export default function Faq() {
  const { t } = useLang()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-center px-6 py-24">
      <h2
        className="text-gradient-white text-center"
        style={{
          fontSize: 'clamp(40px, 4.5vw, 56px)',
          lineHeight: '1.2',
          letterSpacing: '-2.8px',
        }}
      >
        {t.faq.title}
      </h2>

      <div className="mt-16 w-full max-w-[768px] space-y-2">
        {t.faq.items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl border border-white/5"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              >
                <span className="text-[16px] font-medium leading-[24px] text-white">
                  {item.q}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`shrink-0 text-white/50 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    d="M3 5L7 9L11 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="border-t border-white/5 px-6 py-5">
                  <ul className="space-y-2.5 text-[16px] leading-[24px] text-[#a1a4a5]">
                    {item.a.map((bullet, bi) => (
                      <li key={bi} className="flex gap-2">
                        <span className="mt-[10px] inline-block h-1 w-1 shrink-0 rounded-full bg-white/40" />
                        <div className="flex-1">
                          <div>{bullet.text}</div>
                          {bullet.children && bullet.children.length > 0 && (
                            <ul className="mt-2 space-y-1.5 pl-4">
                              {bullet.children.map((child, ci) => (
                                <li key={ci} className="flex gap-2">
                                  <span className="mt-[12px] inline-block h-px w-2 shrink-0 bg-white/30" />
                                  <span>{child}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
