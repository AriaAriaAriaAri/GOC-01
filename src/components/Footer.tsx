import { useLang } from '../i18n'
import { asset } from '../lib/asset'

// 临时开关：暂时隐藏底部 5 列链接（Features/Resources/Company/Help/Community）。
// 后续版本补齐内容时改成 true 即可恢复显示。
const SHOW_COLUMNS = false

function FooterCopyright() {
  const { t } = useLang()
  return (
    <p className="text-[12px] leading-[16px] text-[#71717b]">
      © {new Date().getFullYear()} {t.footer.copyright}
    </p>
  )
}

const COLUMNS: Array<{ title: string; links: string[] }> = [
  {
    title: 'Features',
    links: ['Email API', 'SMTP', 'Inbound', 'Audiences', 'Broadcasts', 'Templates', 'Webhooks'],
  },
  {
    title: 'Resources',
    links: ['Changelog', 'Pricing', 'Security', 'SOC 2', 'GDPR', 'Brand'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Customers', 'Humans', 'Philosophy'],
  },
  {
    title: 'Help',
    links: ['Contact', 'Support', 'Status', 'Migrate', 'Knowledge base', 'Legal policies'],
  },
  {
    title: 'Community',
    links: ['Events', 'Insiders', 'Open source', 'Wallpapers'],
  },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.11] bg-black">
      <span className="absolute left-1/2 top-0 h-px w-[768px] -translate-x-1/2 gradient-divider" />
      <div
        className="pointer-events-none absolute -top-[154px] left-1/2 h-[300px] w-[1344px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(200,200,200,0.12) 0%, rgba(200,200,200,0) 70%)',
        }}
      />

      <div
        className={`mx-auto max-w-[1280px] px-6 ${
          SHOW_COLUMNS
            ? 'grid gap-8 py-36 lg:grid-cols-[300px_1fr]'
            : 'flex flex-col items-center gap-4 py-20'
        }`}
      >
        <div
          className={`flex ${
            SHOW_COLUMNS ? 'flex-col gap-8' : 'flex-col items-center gap-3'
          }`}
        >
          <a href="#" className="inline-flex">
            <img src={asset('/assets/logo-goc01.svg')} alt="GOC 01" className="h-4 w-auto" />
          </a>
          {!SHOW_COLUMNS && (
            <FooterCopyright />
          )}
        </div>

        {SHOW_COLUMNS && (
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-[14px] font-medium leading-[20px] text-white">
                  {col.title}
                </div>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[14px] leading-[20px] text-[#a1a4a5] transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </footer>
  )
}
