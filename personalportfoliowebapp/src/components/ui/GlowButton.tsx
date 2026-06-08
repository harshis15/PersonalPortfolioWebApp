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
  'inline-flex items-center justify-center rounded-full border border-mint bg-mint px-5 py-2.5 text-sm font-semibold text-teal transition duration-200 hover:-translate-y-0.5 hover:bg-teal-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint/80 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep'

const content = (children: ReactNode, className?: string) => <span className={className ?? ''}>{children}</span>

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
