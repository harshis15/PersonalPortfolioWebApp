type MarqueeRowProps = {
  items: string[]
  reverse?: boolean
}

const MarqueeRow = ({ items, reverse = false }: MarqueeRowProps) => {
  const data = [...items, ...items]

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {data.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full border border-white/15 bg-navy px-4 py-2 text-xs font-mono text-teal transition hover:shadow-glow"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default MarqueeRow
