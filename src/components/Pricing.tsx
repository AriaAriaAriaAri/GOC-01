import { useLang } from '../i18n'
import { asset } from '../lib/asset'

// 临时开关：价格方案还没定好，先把整个 Pricing 区块和 Header 里的 Pricing
// 导航 tab 一起隐藏。后面价格定了，改成 true 即可恢复显示。
// （Header 里通过 import 这个常量来同步控制导航，无需重复改两处。）
export const SHOW_PRICING = false

// 价格本身（金额、人民币 / 美元符号）不做翻译，直接保留
const BASE_PRICES = ['$0.05/session', '$0.04/session', '$0.03/session']

export default function Pricing() {
  const { t } = useLang()
  const base = t.pricing.base
  const addon = t.pricing.addon

  if (!SHOW_PRICING) return null

  return (
    <section
      id="pricing"
      className="mx-auto flex max-w-[1280px] scroll-mt-[58px] flex-col items-center px-6 py-24"
    >
      <img
        src={asset('/assets/3d-pricing.png')}
        alt=""
        className="h-[170px] w-[170px] object-cover object-center"
      />

      <h2
        className="text-gradient-white mt-2 text-center"
        style={{
          fontSize: 'clamp(40px, 4.5vw, 56px)',
          lineHeight: '1.2',
          letterSpacing: '-2.8px',
        }}
      >
        {t.pricing.title}
      </h2>

      <p className="mt-3 max-w-[640px] text-center text-[18px] leading-[27px] text-[#a1a4a5]">
        {t.pricing.description}
      </p>

      <div className="mt-12 grid w-full max-w-[1024px] grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Base Plan */}
        <div className="rounded-2xl border border-white/5 bg-[#111] p-8">
          <h3
            className="text-[20px] text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              lineHeight: '28px',
            }}
          >
            {base.title}
          </h3>
          <p className="mt-2 text-[14px] leading-[20px] text-[#71717b]">
            {base.subtitle}
          </p>

          <div className="mt-4">
            {base.tiers.map((range, i) => (
              <div
                key={range}
                className="flex items-center justify-between border-b border-white/5 py-3"
              >
                <span className="text-[14px] leading-[20px] text-[#9f9fa9]">
                  {range}
                </span>
                <span className="text-[14px] font-semibold leading-[20px] text-white">
                  {BASE_PRICES[i]}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between py-3">
              <span className="text-[14px] leading-[20px] text-[#9f9fa9]">
                {base.tierCustom}
              </span>
              <span className="text-[14px] font-semibold leading-[20px] text-[#a78bfa]">
                {base.customLabel}
              </span>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-[12px] font-medium uppercase tracking-[0.6px] text-[#52525c]">
              {base.includesLabel}
            </p>
            <ul className="mt-3 space-y-3">
              {base.includes.map((inc) => (
                <li key={inc} className="flex items-center gap-2">
                  <img src={asset('/assets/icon-check.svg')} alt="" className="h-3.5 w-3.5" />
                  <span className="text-[14px] leading-[20px] text-[#9f9fa9]">{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-[12px] italic leading-[16px] text-[#52525c]">
            {base.note}
          </p>

          <a
            href="#"
            className="mt-4 flex h-11 w-full items-center justify-center rounded-full bg-white text-[14px] font-semibold text-black transition-transform hover:scale-[1.01]"
          >
            {base.cta} →
          </a>
        </div>

        {/* Add-on Plan */}
        <div className="relative overflow-hidden rounded-2xl border border-white/30 bg-[#111] p-8">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

          <div className="flex items-center gap-3">
            <h3
              className="text-[20px] text-white"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                lineHeight: '28px',
              }}
            >
              {addon.title}
            </h3>
            <span className="rounded-full border border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.1)] px-2.5 py-0.5 text-[10px] leading-[15px] text-[#f59e0b]">
              {addon.badge}
            </span>
          </div>

          <p className="mt-3 text-[14px] leading-[20px] text-[#71717b]">
            {addon.subtitle}
          </p>

          <div className="mt-4 rounded-2xl bg-white/[0.05] p-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.6px] text-[#71717b]">
              {addon.howItWorksTitle}
            </p>
            <p className="mt-3 text-[14px] leading-[22px] text-[#9f9fa9]">
              {addon.howItWorksBefore}
              <span className="font-medium text-white">{addon.howItWorksHighlight}</span>
              {addon.howItWorksAfter}
            </p>
          </div>

          <div className="mt-4 rounded-2xl bg-white/[0.05] p-5">
            <p className="text-[12px] font-medium uppercase tracking-[0.6px] text-[#71717b]">
              {addon.exampleTitle}
            </p>
            <div className="mt-4 space-y-2 text-[14px] leading-[20px] text-[#9f9fa9]">
              <div>{addon.exampleSessions}</div>
              <div className="flex justify-between">
                <span>{addon.exampleBaseLabel}</span>
                <span className="text-white">$8,000</span>
              </div>
              <div className="flex justify-between">
                <span>{addon.exampleActivationLabel}</span>
                <span className="text-white">$4,800</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-white/10 pt-2">
                <span className="font-medium text-white">{addon.exampleTotalLabel}</span>
                <span className="font-bold text-[#84cc16]">$12,800/mo</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[12px] italic leading-[16px] text-[#52525c]">
            {addon.note}
          </p>

          <a
            href="#"
            className="mt-4 flex h-11 w-full items-center justify-center rounded-full border border-white/40 text-[14px] font-semibold text-white transition-colors hover:bg-white/5"
          >
            {addon.cta} →
          </a>
        </div>
      </div>
    </section>
  )
}
