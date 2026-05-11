import { useLang } from '../i18n'
import { asset } from '../lib/asset'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="relative overflow-hidden pt-[58px]">
      {/* Floor + light-ray backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={asset('/assets/light-ray-background.png')}
          alt=""
          className="absolute -top-20 left-1/2 w-[1920px] max-w-none -translate-x-1/2 opacity-90"
        />
        <img
          src={asset('/assets/floor-background.png')}
          alt=""
          className="absolute inset-x-0 top-0 h-[1200px] w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
      </div>

      <div className="mx-auto flex min-h-[950px] max-w-[1280px] items-center px-12 pb-12">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,512px)_minmax(0,648px)] items-center gap-10">
          {/* Left: copy */}
          <div className="pl-2 xl:pl-16">
            {/* Pill chip — 1px gradient border + dark fill */}
            <div className="relative inline-flex items-center rounded-full p-px">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    'linear-gradient(0deg, rgba(2,252,239,0.44) 0%, rgba(255,181,43,0.44) 50%, rgba(160,43,254,0.44) 100%)',
                }}
              />
              <span className="relative flex h-[30px] items-center gap-1 rounded-full bg-[#0b0e14] px-3 text-[14px] text-[#f0f0f0]">
                {t.hero.tagline}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M4.5 9L7.5 6L4.5 3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            <h1
              className="mt-10 whitespace-nowrap text-gradient-white"
              style={{
                fontFamily: "'Inria Serif', serif",
                fontSize: 'clamp(40px, 4.6vw, 62px)',
                lineHeight: 1.37,
                letterSpacing: '-0.014em',
              }}
            >
              {t.hero.titleLine1}
              <br />
              {t.hero.titleLine2}
            </h1>

            <p className="mt-3 max-w-[472px] text-[18px] leading-[27px] text-[#a1a4a5]">
              {t.hero.description}
            </p>

            <div className="mt-8">
              <a
                href="#"
                className="cta-glow inline-flex h-12 items-center justify-center gap-2 rounded-2xl border-2 border-white/5 px-6 text-[16px] font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                {t.hero.cta} →
              </a>
            </div>
          </div>

          {/* Right: hero dashboard preview */}
          <div className="relative flex h-[550px] items-center justify-center pl-10">
            <div className="relative h-[550px] w-full max-w-[648px] overflow-hidden">
              <img
                src={asset('/assets/hero-product.png')}
                alt="GOC 01 dashboard preview"
                className="h-full w-full object-cover object-center"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-white"
                style={{ mixBlendMode: 'saturation' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
