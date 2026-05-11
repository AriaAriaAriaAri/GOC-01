import { useLang } from '../i18n'

// 平台名属于品牌名，无需翻译
const PLATFORMS = [
  { name: 'Google Ads', logo: '/assets/logo-google-ads.svg' },
  { name: 'Meta', logo: '/assets/logo-meta.svg' },
  { name: 'Taboola', logo: '/assets/logo-taboola.svg' },
  { name: 'Tiktok', logo: '/assets/logo-tiktok.svg' },
  { name: 'Amazon DSP', logo: '/assets/logo-amazon.svg' },
  { name: 'Snap', logo: '/assets/logo-snap.svg' },
  { name: 'Shopify', logo: '/assets/logo-shopify.svg' },
  { name: 'GA4', logo: '/assets/logo-ga4.svg' },
  { name: 'Instagram', logo: '/assets/logo-instagram.svg' },
  { name: 'X', logo: '/assets/logo-x.svg' },
]

export default function ConnectsStack() {
  const { t } = useLang()
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-start px-6 py-24">
      <h2
        className="text-gradient-white"
        style={{
          fontSize: 'clamp(40px, 4.5vw, 56px)',
          lineHeight: '1.2',
          letterSpacing: '-2.8px',
        }}
      >
        {t.connects.title}
      </h2>

      <p className="mt-3 max-w-[820px] text-[18px] leading-[27px] text-[#a1a4a5]">
        {t.connects.description}
      </p>

      <div className="mt-12 grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5">
        {PLATFORMS.map((p) => (
          <div key={p.name} className="flex flex-col items-center gap-[18px]">
            <div className="relative flex h-[160px] w-[200px] items-center justify-center rounded-3xl border-[1.5px] border-[rgba(214,235,253,0.19)]">
              <span className="absolute left-1/2 top-0 h-px w-[120px] -translate-x-1/2 gradient-divider" />
              <img src={p.logo} alt={p.name} className="h-20 w-20 object-contain" />
            </div>
            <span className="text-[14px] leading-[22px] text-[#a1a4a5]">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
