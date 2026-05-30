import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  const { footer, hero } = portfolioData

  return (
    <footer className="border-t border-white/10 bg-navy-deep px-5 py-6 md:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 text-sm text-muted md:flex-row">
        <p>{footer.left}</p>
        <p className="font-mono text-xs uppercase tracking-[0.15em]">{footer.center}</p>
        <div className="flex items-center gap-3">
          {hero.socialLinks.map((link) => {
            const Icon = link.type === 'linkedin' ? FiLinkedin : link.type === 'github' ? FiGithub : FiMail
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.type === 'email' ? undefined : '_blank'}
                rel={link.type === 'email' ? undefined : 'noreferrer'}
                aria-label={link.label}
                className="rounded-full border border-white/15 p-2 text-muted transition hover:border-mint/60 hover:text-teal"
              >
                <Icon size={14} />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}

export default Footer
