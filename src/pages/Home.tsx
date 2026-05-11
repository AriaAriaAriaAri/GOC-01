import Hero from '../components/Hero'
import TrustedBy from '../components/TrustedBy'
import PoweringGrowth from '../components/PoweringGrowth'
import Problem from '../components/Problem'
import FeatureSection from '../components/FeatureSection'
import ConnectsStack from '../components/ConnectsStack'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import { useLang } from '../i18n'
import { asset } from '../lib/asset'

export default function Home() {
  const { t } = useLang()
  return (
    <main>
      <Hero />
      <TrustedBy />
      <PoweringGrowth />
      <Problem />
      <FeatureSection
        decorImage={asset('/assets/3d-broadcast-fallback.png')}
        title={t.features.unifyAd.title}
        description={t.features.unifyAd.description}
        bigImage={asset('/assets/image-107.png')}
      />
      <FeatureSection
        decorImage={asset('/assets/3d-chart-pie.png')}
        title={t.features.impulse.title}
        description={t.features.impulse.description}
        bigImage={asset('/assets/image-110.png')}
        bigImageHeight={543}
      />
      <FeatureSection
        decorImage={asset('/assets/3d-channel-data.png')}
        title={t.features.channel.title}
        description={t.features.channel.description}
        bigImage={asset('/assets/image-111.png')}
        bigImageHeight={632}
        decorScale={1.3}
      />
      <ConnectsStack />
      <Pricing />
      <Faq />
    </main>
  )
}
