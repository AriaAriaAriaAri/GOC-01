import { useLang } from '../i18n'

export default function About() {
  const { t } = useLang()
  return (
    <main className="pt-[58px]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <img
            src="/assets/light-ray-background.png"
            alt=""
            className="absolute -top-20 left-1/2 w-[1920px] max-w-none -translate-x-1/2 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
        </div>

        <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 pt-32 pb-20 text-center">
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/70">
            {t.about.eyebrow}
          </span>
          <h1
            className="text-gradient-white mt-6 max-w-[860px]"
            style={{
              fontFamily: "'Inria Serif', serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.12,
              letterSpacing: '-0.014em',
            }}
          >
            {t.about.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[660px] text-[18px] leading-[27px] text-[#a1a4a5]">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {t.about.stats.map((s) => (
            <div
              key={s.value}
              className="relative overflow-hidden rounded-2xl border border-[rgba(214,235,253,0.19)] px-10 py-[48px]"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(ellipse at top, rgba(120,140,200,0.10) 0%, rgba(0,0,0,0) 65%)',
                }}
              />
              <div
                className="relative text-gradient-white"
                style={{
                  fontSize: 48,
                  lineHeight: '72px',
                  letterSpacing: '-2.68px',
                }}
              >
                {s.value}
              </div>
              <p className="relative mt-3 text-[18px] leading-[27px] text-[#a1a4a5]">
                {s.caption}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-[768px] px-6 py-16">
        <h2
          className="text-gradient-white text-center"
          style={{
            fontSize: 'clamp(32px, 3.5vw, 44px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          }}
        >
          {t.about.storyTitle}
        </h2>
        <div className="mt-10 space-y-5 text-[16px] leading-[26px] text-[#a1a4a5]">
          {t.about.storyParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p>
            {t.about.storyClosingPrefix}
            <span className="text-white">{t.about.storyClosingHighlight}</span>
            {t.about.storyClosingSuffix}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1280px] px-6 py-20">
        <div
          className="relative overflow-hidden rounded-3xl border border-white/[0.11] px-8 py-20 text-center"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)',
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-1/2 h-full"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(160,160,200,0.12) 0%, rgba(0,0,0,0) 60%)',
            }}
          />
          <h2
            className="text-gradient-white relative mx-auto max-w-[820px]"
            style={{
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            {t.about.ctaTitle}
          </h2>
          <p className="relative mx-auto mt-5 max-w-[600px] text-[18px] leading-[27px] text-[#a1a4a5]">
            {t.about.ctaDescription}
          </p>
        </div>
      </section>
    </main>
  )
}
