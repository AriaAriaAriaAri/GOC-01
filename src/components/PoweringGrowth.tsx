import { useEffect, useRef, useState } from 'react'
import { useLang } from '../i18n'

type StatNumber = {
  /** 动画终点数值 */
  target: number
  /** 动画起点数值（默认 0） */
  from?: number
  /** 显示几位小数（默认 0，即整数） */
  decimals?: number
  prefix?: string
  suffix?: string
}

// 仅保留数值/格式信息；caption 文案从 i18n 资源里按索引取
const STAT_NUMBERS: StatNumber[] = [
  { target: 100, prefix: '$', suffix: 'M' },
  { from: 0.1, target: 1, decimals: 1, prefix: '$', suffix: 'M' },
  { target: 300, suffix: 'X' },
]

/** 数字递增动画时长（毫秒）—— 三个数字用同一时长，整体节奏一致 */
const ANIMATION_DURATION = 1800

/**
 * 滚动到视口内时，把数字从 from 递增到 target，只播放一次。
 * - 使用 ease-out cubic 缓动，结尾平滑停下
 * - 支持小数位数（decimals）
 * - 优先 IntersectionObserver；不支持时直接显示终点值
 */
function AnimatedNumber({
  target,
  from = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
}: {
  target: number
  from?: number
  decimals?: number
  prefix?: string
  suffix?: string
}) {
  const [display, setDisplay] = useState(from)
  const ref = useRef<HTMLDivElement>(null)
  const playedRef = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 不支持 IntersectionObserver 时降级：直接显示最终值
    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(target)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || playedRef.current) return
        playedRef.current = true

        const start = performance.now()
        const distance = target - from
        const tick = (now: number) => {
          const elapsed = now - start
          const t = Math.min(1, elapsed / ANIMATION_DURATION)
          const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
          setDisplay(from + distance * eased)
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)

        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, from])

  return (
    <div
      ref={ref}
      className="text-gradient-white"
      style={{
        fontSize: 48,
        lineHeight: '80px',
        letterSpacing: '-2.68px',
      }}
    >
      {prefix}
      {display.toFixed(decimals).replace(/\.0+$/, '')}
      {suffix}
    </div>
  )
}

export default function PoweringGrowth() {
  const { t } = useLang()
  return (
    <section
      id="features"
      className="mx-auto flex max-w-[1280px] scroll-mt-[58px] flex-col items-center px-6 py-24"
    >
      <img
        src="/assets/3d-control-fallback.png"
        alt=""
        className="h-[170px] w-[170px] object-contain"
      />

      <h2
        className="mt-2 whitespace-nowrap text-center"
        style={{
          fontSize: 'clamp(40px, 4.5vw, 56px)',
          lineHeight: '1.2',
          letterSpacing: '-2.8px',
        }}
      >
        <span className="text-gradient-rainbow">{t.poweringGrowth.titleAccent}</span>
        <span className="text-gradient-white">{t.poweringGrowth.titleRest}</span>
      </h2>

      <p className="mt-3 max-w-[646px] text-center text-[18px] leading-[27px] text-[#a1a4a5]">
        {t.poweringGrowth.description}
      </p>

      <div className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {STAT_NUMBERS.map((stat, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-[rgba(214,235,253,0.19)] px-10 py-[58px]"
          >
            <span className="absolute left-1/2 top-0 h-px w-[150px] -translate-x-1/2 gradient-divider" />
            <AnimatedNumber
              target={stat.target}
              from={stat.from}
              decimals={stat.decimals}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
            <p className="mt-2 text-[16px] leading-[24px] text-[#b8b8b8]">
              {t.poweringGrowth.stats[i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
