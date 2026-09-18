import React from "react";

interface Tech {
  name: string;
  color: string;
  icon: React.ReactNode;
}

const TECHS: Tech[] = [
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx={12} cy={12} rx={10} ry={4.2} />
        <ellipse cx={12} cy={12} rx={10} ry={4.2} transform="rotate(60 12 12)" />
        <ellipse cx={12} cy={12} rx={10} ry={4.2} transform="rotate(120 12 12)" />
        <circle cx={12} cy={12} r={1.8} fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <g>
        <rect x={2} y={2} width={20} height={20} rx={3} fill="currentColor" opacity={0.15} />
        <rect x={2} y={2} width={20} height={20} rx={3} fill="none" stroke="currentColor" strokeWidth={1.4} />
        <text x={12} y={16.5} textAnchor="middle" fontSize={9} fontWeight={700} fill="currentColor" fontFamily="system-ui">TS</text>
      </g>
    ),
  },
  {
    name: "JavaScript",
    color: "#F0DB4F",
    icon: (
      <g>
        <rect x={2} y={2} width={20} height={20} rx={3} fill="currentColor" opacity={0.15} />
        <rect x={2} y={2} width={20} height={20} rx={3} fill="none" stroke="currentColor" strokeWidth={1.4} />
        <text x={12} y={16.5} textAnchor="middle" fontSize={9} fontWeight={700} fill="currentColor" fontFamily="system-ui">JS</text>
      </g>
    ),
  },
  {
    name: "Node.js",
    color: "#3C873A",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round">
        <path d="M12 2 L21 7 V17 L12 22 L3 17 V7 Z" />
        <path d="M9 12h6M12 9v6" strokeLinecap="round" />
      </g>
    ),
  },
  {
    name: "Python",
    color: "#3776AB",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round">
        <path d="M12 2c-3 0-3 2-3 2v3h6V6c0 0 3-1 3 2s-1 4-3 4h-4c-2 0-4 2-4 4s0 4 3 4h1v-2c0 0-1-1 1-1h4c2 0 3-1 3-3V9" />
        <circle cx={10} cy={4.3} r={0.7} fill="currentColor" stroke="none" />
        <circle cx={14} cy={19.7} r={0.7} fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "HTML5",
    color: "#E34F26",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round">
        <path d="M4 2h16l-1.4 16L12 21l-6.6-3L4 2Z" />
        <path d="M7.5 6h9l-.3 4H8l.15 2h7.35l-.4 4.6L12 17.7l-3.1-1.1-.2-2.4" />
      </g>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round">
        <path d="M4 2h16l-1.4 16L12 21l-6.6-3L4 2Z" transform="scale(-1,1) translate(-24,0)" />
        <path d="M16.5 6h-9l.3 4h8l-.3 3.4-3.5 1-3.5-1-.2-1.8" transform="scale(-1,1) translate(-24,0)" />
      </g>
    ),
  },
  {
    name: "Vue",
    color: "#42B883",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinejoin="round">
        <path d="M3 4h4l5 9 5-9h4L12 20 3 4Z" />
        <path d="M7 4h3l2 3.6L14 4h3l-5 9-5-9Z" opacity={0.55} />
      </g>
    ),
  },
  {
    name: "Angular",
    color: "#DD0031",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinejoin="round">
        <path d="M12 2 21 5.5 19.5 18 12 22 4.5 18 3 5.5Z" />
        <path d="M12 6 17 17M12 6 7 17M9 13h6" strokeLinecap="round" />
      </g>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round">
        <circle cx={6} cy={18} r={2} />
        <circle cx={6} cy={7} r={2} />
        <circle cx={17} cy={12} r={2} />
        <path d="M6 9v7M8 7h5.5a3.5 3.5 0 0 1 3.5 3.5V10" />
      </g>
    ),
  },
  {
    name: "Docker",
    color: "#2496ED",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round">
        <rect x={3} y={11} width={3.2} height={3} />
        <rect x={7} y={11} width={3.2} height={3} />
        <rect x={11} y={11} width={3.2} height={3} />
        <rect x={7} y={7.5} width={3.2} height={3} />
        <rect x={11} y={7.5} width={3.2} height={3} />
        <path d="M2 14c0 4 3.5 6.5 9 6.5 6 0 9.5-3.5 10.5-7.2-1-.4-2.2-.2-2.8.4-.6-1-2-1.4-3-.8" />
      </g>
    ),
  },
  {
    name: "GraphQL",
    color: "#E10098",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round">
        <path d="M12 3 20.5 8V16L12 21 3.5 16V8Z" />
        <circle cx={12} cy={3} r={1.3} fill="currentColor" stroke="none" />
        <circle cx={20.5} cy={8} r={1.3} fill="currentColor" stroke="none" />
        <circle cx={20.5} cy={16} r={1.3} fill="currentColor" stroke="none" />
        <circle cx={12} cy={21} r={1.3} fill="currentColor" stroke="none" />
        <circle cx={3.5} cy={16} r={1.3} fill="currentColor" stroke="none" />
        <circle cx={3.5} cy={8} r={1.3} fill="currentColor" stroke="none" />
      </g>
    ),
  },
  {
    name: "Tailwind",
    color: "#38BDF8",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10c1-3 3-4.5 6-4.5S12 7 14 10c1-3 3-4.5 6-4.5S24 7 22 10c-1 3-3 4.5-6 4.5S12 13 10 10c-1 3-3 4.5-6 4.5S0 13 2 10Z" transform="scale(0.9) translate(1.2,3)" />
      </g>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: (
      <g fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round">
        <path d="M12 2c3 3 4.5 6.5 4.5 10 0 4-2 7-4.5 9-2.5-2-4.5-5-4.5-9C7.5 8.5 9 5 12 2Z" />
        <path d="M12 15v6" strokeLinecap="round" />
      </g>
    ),
  },
];

export default function TechCarousel(): React.JSX.Element {
  const items = [...TECHS, ...TECHS];

  return (
    <div className="tech-carousel" aria-hidden="true">
      <div className="tech-carousel-track">
        {items.map((tech, i) => (
          <div className="tech-card" key={`${tech.name}-${i}`}>
            <span className="tech-icon" style={{ color: tech.color }}>
              <svg viewBox="0 0 24 24">{tech.icon}</svg>
            </span>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}