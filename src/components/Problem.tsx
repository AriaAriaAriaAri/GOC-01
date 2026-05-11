import { useLang } from '../i18n'
import { asset } from '../lib/asset'

const ICONS = [
  asset('/assets/icon-events.svg'),
  asset('/assets/icon-overclaim.svg'),
  asset('/assets/icon-targeting.svg'),
]

export default function Problem() {
  const { t } = useLang()
  return (
    <section className="mx-auto flex max-w-[1280px] flex-col items-start px-6 py-24">
      <h2
        className="text-gradient-white"
        style={{
          fontSize: 'clamp(38px, 4.2vw, 53px)',
          lineHeight: '1.27',
          letterSpacing: '-2.8px',
        }}
      >
        {t.problem.titleLine1}
        <br />
        {t.problem.titleLine2}
      </h2>

      <p className="mt-3 max-w-[820px] text-[18px] leading-[27px] text-[#a1a4a5]">
        {t.problem.description}
      </p>

      <div className="mt-16 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {t.problem.items.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-4 rounded-2xl border border-[rgba(214,235,253,0.19)] p-10 min-h-[263px]"
          >
            <span className="absolute left-1/2 top-0 h-px w-[150px] -translate-x-1/2 gradient-divider" />
            <img src={ICONS[i]} alt="" className="h-8 w-8" />
            <h3
              className="text-[20px] text-white"
              style={{ fontWeight: 300, lineHeight: '36px', letterSpacing: '0.035px' }}
            >
              {item.title}
            </h3>
            <p className="text-[16px] leading-[27px] text-[#a1a4a5]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
