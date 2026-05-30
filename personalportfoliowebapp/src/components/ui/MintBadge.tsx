type MintBadgeProps = {
  label: string
  className?: string
}

const MintBadge = ({ label, className = '' }: MintBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-mint/45 bg-navy px-3 py-1 text-[11px] font-mono uppercase tracking-wider text-teal ${className}`}
    >
      {label}
    </span>
  )
}

export default MintBadge
