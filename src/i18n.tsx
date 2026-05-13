import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Lang = 'en' | 'zh'

const STORAGE_KEY = 'goc01-lang'

// ─────────────────────────────────────────────────────────────────────────
//  英文文案（结构来源 / 真值）
// ─────────────────────────────────────────────────────────────────────────
const en = {
  nav: {
    features: 'Features',
    pricing: 'Pricing',
    aboutUs: 'About us',
    startFree: 'Start for Free',
  },
  lang: {
    en: 'English',
    zh: '简体中文',
    label: 'Language',
    toggleLabel: 'Switch language',
  },
  hero: {
    tagline: 'Data-Driven Growth Engine',
    titleLine1: 'GOC 01 Growth',
    titleLine2: 'Engine',
    description:
      'We integrate data from GA4 and Meta ads to evaluate full-funnel user behavior, enabling smarter decisions, precise targeting, and higher ROI.',
    cta: 'Start for Free',
  },
  trustedBy: {
    heading: 'Trusted by',
  },
  poweringGrowth: {
    titleAccent: 'Powering',
    titleRest: ' Growth at Scale',
    description:
      'Turn marketing data into explosive growth. GOC 01 helps global brands scale DTC sales and maximize ROI.',
    stats: [
      'AI advertising boosted DTC sales to',
      'Drove client revenue past',
      'Increased model token usage by',
    ],
  },
  problem: {
    titleLine1: 'The problem',
    titleLine2: 'with your current setup',
    description:
      "Most Shopify stores don't realize how much data they're losing — until they see the numbers.",
    items: [
      {
        title: "You're Losing 15-30% of Events",
        desc: 'GA4 misses conversions. Your ads optimize on incomplete data.',
      },
      {
        title: 'Every Platform Over-Claims',
        desc: "Meta + Google combined report more conversions than you actually have. No neutral view of what's working.",
      },
      {
        title: "You're Targeting Everyone Equally",
        desc: 'Only 10-20% of visitors will buy. Without scoring, your budget treats window shoppers the same as ready buyers.',
      },
    ],
  },
  features: {
    unifyAd: {
      title: 'Unify your ad data',
      description:
        'We integrate the underlying data from ad platforms, and utilize an advanced data-driven attribution model.',
    },
    impulse: {
      title: 'Identify impulse buying',
      description:
        'By analyzing the traffic and purchase percentage of single and multiple visits, we can determine whether a product is an impulse purchase.',
    },
    channel: {
      title: 'Unify your channel data',
      description:
        'Comprehensive channel data panel for a clear overview of ad performance.',
    },
  },
  connects: {
    title: 'Connects to your stack',
    description:
      'One-click authorization to all your ad platforms. Your data flows in minutes.',
  },
  pricing: {
    title: 'Pay only for what you track',
    description:
      'All plans include GA4 Tracking Recovery + Cross-Platform Attribution. No hidden fees.',
    base: {
      title: 'Base Plan',
      subtitle: 'Tracking Recovery + Attribution',
      tiers: [
        '0 – 100K sessions/mo',
        '100K – 500K sessions/mo',
        '500K – 2M sessions/mo',
      ],
      tierCustom: '2M+ sessions/mo',
      customLabel: 'Custom',
      includesLabel: 'All plans include:',
      includes: [
        'GA4 Tracking Recovery',
        'Cross-Platform Attribution',
        'Subdomain setup guidance',
        'All platform integrations',
        'Unified dashboard',
        'Email support',
      ],
      note: 'Customer creates subdomain + connects their own CDN account.',
      cta: 'Get Started Free',
    },
    addon: {
      title: 'User Scoring & Activation',
      badge: 'Add-on',
      subtitle: '4x base rate, only on activated sessions',
      howItWorksTitle: 'How it works',
      howItWorksBefore: 'ML identifies your ',
      howItWorksHighlight: 'Top Performing Audience',
      howItWorksAfter:
        ' (top 10-20% of visitors). Scored audiences auto-push to your ad platforms for better targeting.',
      exampleTitle: 'Example calculation',
      exampleSessions: '200K sessions/mo',
      exampleBaseLabel: 'Base (200K × $0.04)',
      exampleActivationLabel: 'Activation top 15% (30K × $0.16)',
      exampleTotalLabel: 'Total',
      note: 'Requires ML processing + Cloud Computing for user behavior analysis.',
      cta: 'Talk to Sales',
    },
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'How Are Top 20% Users Filtered?',
        a: [
          {
            text: 'Based on user behavior scoring:',
            children: ['Clicks', 'Dwell time', 'Page navigation', 'Add-to-cart actions'],
          },
          {
            text: 'Users are ranked by total score — the top 20% are identified as high-potential users.',
          },
        ],
      },
      {
        q: 'Is the Attribution Value Consistent with GA Data?',
        a: [
          { text: 'Total transaction amount is consistent.' },
          { text: 'Channel attribution distribution differs.' },
          {
            text: 'GA defaults to last-touch attribution and does not filter out invalid traffic.',
          },
        ],
      },
      {
        q: 'How Are Delayed Purchase Users Attributed?',
        a: [
          {
            text: "Attribution weight is adjusted based on the time interval between a user's visit and purchase.",
          },
          {
            text: 'Longer intervals lean toward the later touchpoint; shorter intervals lean toward the earlier one.',
          },
        ],
      },
      {
        q: 'What Are the Prerequisites?',
        a: [
          { text: 'No private server deployment or standalone development required.' },
          { text: 'Direct integration with GA or BigQuery is enough to get started.' },
          {
            text: 'Adding an App Tag further improves attribution accuracy (helps identify Direct traffic sources).',
          },
        ],
      },
      {
        q: 'How to Attribute Offline QR Code Scanning?',
        a: [
          {
            text: 'If the user already has site cookies stored, scan behavior can be recognized and attributed.',
          },
          {
            text: 'However, if the offline scanning device is different from the online device, attribution cannot be performed.',
          },
        ],
      },
      {
        q: 'Can KOL Traffic Be Tracked?',
        a: [
          { text: 'Yes — as long as UTM parameters are tagged correctly.' },
          {
            text: 'We support standalone attribution for KOL/PR traffic, seeding-rate monitoring, and revenue calculation per creator.',
          },
        ],
      },
      {
        q: 'How to Maximize the Use of the Dashboard?',
        a: [
          { text: 'Save frequently used views (e.g., Upper-Funnel traffic analysis).' },
          {
            text: 'Compare ad-platform clicks with effective on-site users to identify invalid channels.',
          },
          { text: 'Evaluate traffic ads by per-user value rather than by CPC.' },
          {
            text: 'Focus ad optimization on seeding-rate growth and changes in the share of effective users.',
          },
        ],
      },
      {
        q: 'Important Notes',
        a: [
          {
            text: 'GA dwell time and filter values may be biased — not recommended as the basis for optimization.',
          },
          { text: 'Prioritize the effective-user-share and seeding-rate metrics.' },
          {
            text: 'Clarify your seeding rate and conversion cycle to guide pre-launch warm-up and campaign pacing.',
          },
          {
            text: 'Audit tagging conventions regularly to prevent attribution data inconsistencies.',
          },
        ],
      },
    ],
  },
  footer: {
    copyright: 'GOC 01. All rights reserved.',
  },
  about: {
    eyebrow: 'About',
    title: 'The Data-Driven Growth Engine for global brands',
    description:
      'GOC 01 helps outstanding global brands go global. We deliver a customized, end-to-end AI-driven solution that powers a high-efficiency growth engine for your business.',
    stats: [
      { value: '180+', caption: 'Countries & regions covered' },
      { value: '70+', caption: 'Million-dollar projects delivered' },
    ],
    storyTitle: 'Our story',
    storyParagraphs: [
      'Founded in 2018 and headquartered in Shenzhen, GOC 01 has branch offices in Changsha and Suzhou. Our core team comes from senior leadership at well-known Chinese cross-border companies, with deep experience in overseas sales, operations, marketing, and Shopify store development.',
      "We're a technology-services company that builds its own AI systems to drive data-driven marketing — providing brand clients with full-chain global brand services including overseas crowdfunding, advertising, and brand management.",
    ],
    storyClosingPrefix: "Since day one, we've followed a single principle: ",
    storyClosingHighlight: 'brand first, business excellence',
    storyClosingSuffix:
      '. From go-to-market strategy to marketing and sales, we deliver a one-stop solution for entering overseas target markets.',
    ctaTitle: 'Helping outstanding brands go global.',
    ctaDescription: "Let's build your high-efficiency growth engine together.",
  },
}

type Translations = typeof en

// ─────────────────────────────────────────────────────────────────────────
//  中文文案（必须与 en 同结构，TS 强制保证）
// ─────────────────────────────────────────────────────────────────────────
const zh: Translations = {
  nav: {
    features: '功能',
    pricing: '价格',
    aboutUs: '关于我们',
    startFree: '免费开始',
  },
  lang: {
    en: 'English',
    zh: '简体中文',
    label: '语言',
    toggleLabel: '切换语言',
  },
  hero: {
    tagline: '数据驱动的增长引擎',
    titleLine1: 'GOC 01 增长',
    titleLine2: '引擎',
    description:
      '我们整合 GA4 与 Meta 广告数据，评估全漏斗用户行为，助你做出更智慧的决策、更精准的投放，获得更高的 ROI。',
    cta: '免费开始',
  },
  trustedBy: {
    heading: '信赖我们的客户',
  },
  poweringGrowth: {
    titleAccent: '驱动增长',
    titleRest: '，规模化扩张',
    description:
      '把营销数据变成爆发式增长。GOC 01 助力全球品牌扩大 DTC 销售、最大化 ROI。',
    stats: [
      'AI 广告投放推动 DTC 销售达到',
      '帮助客户的营收突破',
      '将模型 token 使用量提升',
    ],
  },
  problem: {
    titleLine1: '当前营销链路',
    titleLine2: '存在的问题',
    description:
      '大多数 Shopify 店铺并不知道自己丢失了多少数据 —— 直到他们真正看到数字。',
    items: [
      {
        title: '你正在丢失 15–30% 的事件',
        desc: 'GA4 漏报转化，广告系统因此基于不完整的数据进行优化。',
      },
      {
        title: '每个平台都在「重复领功」',
        desc: 'Meta 与 Google 合计上报的转化数高于你的真实成交，缺少一份中立的归因视图。',
      },
      {
        title: '你正在对所有访客一视同仁',
        desc: '只有 10–20% 的访客会真正下单。如果不对用户打分，预算就会被浪费在仅看不买的访客身上。',
      },
    ],
  },
  features: {
    unifyAd: {
      title: '统一广告数据',
      description:
        '我们整合各广告平台的底层数据，并应用先进的数据驱动归因模型。',
    },
    impulse: {
      title: '识别冲动消费',
      description:
        '通过分析单次访问与多次访问的流量与下单占比，我们可以判断一件商品是否属于冲动购买。',
    },
    channel: {
      title: '统一渠道数据',
      description: '完整的渠道数据看板，让广告表现一目了然。',
    },
  },
  connects: {
    title: '与你的技术栈无缝对接',
    description: '一键授权所有广告平台，数据几分钟内就能流转起来。',
  },
  pricing: {
    title: '只为你真实追踪的数据付费',
    description:
      '所有套餐均包含 GA4 追踪恢复 + 跨平台归因，没有任何隐藏费用。',
    base: {
      title: '基础套餐',
      subtitle: '追踪恢复 + 归因',
      tiers: ['0 – 100K 会话/月', '100K – 500K 会话/月', '500K – 2M 会话/月'],
      tierCustom: '2M+ 会话/月',
      customLabel: '定制',
      includesLabel: '所有套餐均包含：',
      includes: [
        'GA4 追踪恢复',
        '跨平台归因',
        '子域名配置指引',
        '全平台数据集成',
        '统一数据看板',
        '邮件支持',
      ],
      note: '由客户创建子域名并接入自己的 CDN 账号。',
      cta: '免费开始',
    },
    addon: {
      title: '用户分群 & 激活',
      badge: '附加服务',
      subtitle: '基础费率的 4 倍，仅对激活用户计费',
      howItWorksTitle: '工作原理',
      howItWorksBefore: '机器学习识别出你的 ',
      howItWorksHighlight: '高潜用户人群',
      howItWorksAfter:
        '（前 10–20% 的访客）。打分人群会自动同步到广告平台，实现更精准的投放。',
      exampleTitle: '费用示例',
      exampleSessions: '20 万会话 / 月',
      exampleBaseLabel: '基础费用（200K × $0.04）',
      exampleActivationLabel: '激活前 15%（30K × $0.16）',
      exampleTotalLabel: '总计',
      note: '需要机器学习与云计算进行用户行为分析。',
      cta: '联系销售',
    },
  },
  faq: {
    title: '常见问题',
    items: [
      {
        q: 'Top 20% 用户是如何筛选的？',
        a: [
          {
            text: '基于用户行为打分：',
            children: ['点击', '停留时间', '页面跳转', '加购行为'],
          },
          {
            text: '按总得分排序，Top 20% 即为高潜用户。',
          },
        ],
      },
      {
        q: '归因价值与 GA 数据是否一致？',
        a: [
          { text: '总成交金额一致。' },
          { text: '渠道归因分布不同。' },
          {
            text: 'GA 默认采用 last touch 归因，且未剔除无效流量。',
          },
        ],
      },
      {
        q: '延迟购买的用户如何归因？',
        a: [
          {
            text: '根据用户访问到购买的时间间隔调整归因权重。',
          },
          {
            text: '间隔较长时偏向后一次触点，间隔较短时偏向前一次。',
          },
        ],
      },
      {
        q: '前置条件是什么？',
        a: [
          { text: '不需要部署私有服务器或独立开发。' },
          { text: '直接对接 GA 或 BigQuery 即可开始使用。' },
          {
            text: '若加装 App Tag，还可进一步提升归因精度（识别 Direct 流量来源）。',
          },
        ],
      },
      {
        q: '线下扫码如何归因？',
        a: [
          {
            text: '如果用户之前在网站上已留存 Cookie，扫码行为可以被识别并归因。',
          },
          {
            text: '但如果线下扫码的设备和线上设备不同，则无法归因。',
          },
        ],
      },
      {
        q: 'KOL 流量可以追踪吗？',
        a: [
          { text: '可以 —— 只要 UTM 参数打标正确。' },
          {
            text: '支持 KOL / PR 流量单独归因、监测种草率，并按达人计算带货收入。',
          },
        ],
      },
      {
        q: '如何最大化利用 Dashboard？',
        a: [
          { text: '保存常用看板（例如 Upper-Funnel 流量分析）。' },
          {
            text: '对比广告后台点击数与官网有效用户数，识别无效渠道。',
          },
          { text: '以单用户价值（而非 CPC）作为流量广告的考核标准。' },
          {
            text: '广告优化关注种草率增长与有效用户占比的变化。',
          },
        ],
      },
      {
        q: '特别注意事项',
        a: [
          {
            text: 'GA 后台的停留时间、筛选数值存在偏差，不建议作为优化依据。',
          },
          { text: '优先参考有效用户占比与种草率指标。' },
          {
            text: '明确种草率与转化周期，指导投放预热与节奏安排。',
          },
          {
            text: '及时检查打标规范，避免数据归因混乱。',
          },
        ],
      },
    ],
  },
  footer: {
    copyright: 'GOC 01。版权所有。',
  },
  about: {
    eyebrow: '关于我们',
    title: '为全球品牌打造的数据驱动增长引擎',
    description:
      'GOC 01 助力优秀的全球品牌走向世界。我们提供端到端、定制化的 AI 驱动解决方案，为你的业务搭建高效率的增长引擎。',
    stats: [
      { value: '180+', caption: '业务覆盖国家与地区' },
      { value: '70+', caption: '百万美元级项目交付' },
    ],
    storyTitle: '我们的故事',
    storyParagraphs: [
      'GOC 01 成立于 2018 年，总部位于深圳，并在长沙、苏州设有分公司。核心团队成员均来自国内知名出海企业的高级管理层，在海外销售、运营、营销以及 Shopify 独立站开发方面拥有丰富的一线实战经验。',
      '我们是一家自研 AI 系统、以技术服务驱动数据化营销的公司，为品牌客户提供包括海外众筹、广告投放、品牌管理在内的全链路全球品牌服务。',
    ],
    storyClosingPrefix: '自创立之日起，我们始终坚持一条原则：',
    storyClosingHighlight: '品牌优先，精益运营',
    storyClosingSuffix:
      '。从市场策略到营销与销售，我们为客户提供进入海外目标市场的一站式解决方案。',
    ctaTitle: '助力优秀品牌走向全球。',
    ctaDescription: '让我们一起搭建你的高效率增长引擎。',
  },
}

const translations: Record<Lang, Translations> = { en, zh }

interface LangContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const LangContext = createContext<LangContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'zh') return saved
  } catch {
    // localStorage 不可用就降级为默认值
  }
  // 首次访问统一默认英文；用户在 LanguageSwitcher 切到中文后会写入 localStorage，
  // 后续访问会优先读取保存的偏好。
  return 'en'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>')
  return ctx
}
