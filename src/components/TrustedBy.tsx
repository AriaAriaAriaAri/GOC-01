import { useLang } from '../i18n'

// 12 张 logo 已被设计成统一的 640×384 画布尺寸，logo 居中且视觉大小已对齐。
// 用 brightness(0) invert(1) 把任意颜色的 logo 都统一成纯白，
// 配合 opacity 实现 Figma "Trusted by" 暗淡白色质感。
const LOGOS = Array.from(
  { length: 12 },
  (_, i) => `/assets/logos/${String(i + 1).padStart(2, '0')}.png`,
)

export default function TrustedBy() {
  const { t } = useLang()
  return (
    <section className="relative mx-auto mt-24 flex max-w-[1280px] flex-col items-center border-t border-white/[0.12] px-6 pt-[97px] pb-[96px] rounded-3xl">
      <div className="absolute -top-[103px] left-1/2 h-[200px] w-[400px] -translate-x-1/2 pointer-events-none">
        <div
          className="h-full w-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(200,200,200,0.12) 0%, rgba(200,200,200,0) 70%)',
          }}
        />
      </div>
      <span className="absolute left-1/2 top-0 h-px w-[300px] -translate-x-1/2 gradient-divider" />

      <p className="text-[18px] leading-[27px] text-[#a1a4a5]">{t.trustedBy.heading}</p>

      <div className="mt-10 grid w-full max-w-[1280px] grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-1">
        {LOGOS.map((src, i) => (
          <div
            key={src}
            className="flex h-[96px] w-full items-center justify-center"
          >
            <img
              src={src}
              alt={`Logo ${i + 1}`}
              loading="lazy"
              className="block h-[96px] w-auto max-w-full object-contain opacity-80"
              style={{
                filter: 'brightness(0) invert(1)',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
