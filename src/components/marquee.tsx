"use client";

interface MarqueeProps {
  items: string[];
  speed?: "normal" | "slow";
  className?: string;
  separator?: string;
}

export default function Marquee({
  items,
  speed = "normal",
  className = "",
  separator = "—",
}: MarqueeProps) {
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animClass}`}>
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="mx-6 md:mx-10">{item}</span>
            <span className="text-accent-warm/30">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
