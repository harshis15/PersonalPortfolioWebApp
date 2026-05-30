import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type GlowButtonProps = {
  children: ReactNode
  className?: string
  href?: string
} & (
  | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ href?: undefined } & ButtonHTMLAttributes<HTMLButtonElement>)
)

const baseClass =
  'group relative inline-flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/80 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

const content = (children: ReactNode, className?: string) => (
  <>
    <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,#713600,#C05800,#FDFBD4,#713600)] glow-spin" />
    <span className="absolute inset-[1px] rounded-full bg-navy-deep" />
    <span className={`relative z-10 text-teal ${className ?? ''}`}>{children}</span>
  </>
)

const GlowButton = ({ children, className, href, ...props }: GlowButtonProps) => {
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${className ?? ''}`} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content(children)}
      </a>
    )
  }

  return (
    <button className={`${baseClass} ${className ?? ''}`} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content(children)}
    </button>
  )
}

export default GlowButton
