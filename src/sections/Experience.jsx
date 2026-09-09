import React, { useState } from 'react';
import Reveal from '../components/Reveal';

const EXPERIENCES = [
  {
    company: 'The Hanover Insurance Group',
    role: 'Data Engineer Intern',
    dates: 'Jun 2026 – Present',
    domain: 'hanover.com',
    monogram: 'H',
  },
  {
    company: 'Handshake AI Solutions',
    role: 'Machine Learning Fellow',
    dates: 'Oct 2025 – Jan 2026',
    domain: 'joinhandshake.com',
    monogram: 'HS',
  },
  {
    company: 'Saama Technologies',
    role: 'Machine Learning Intern',
    dates: 'Jun 2023 – Aug 2023',
    logo: '/saama-logo.jpg',
    domain: 'saama.com',
    monogram: 'S',
  },
  {
    company: 'TEK — Technology, Empowerment & Kinship',
    role: 'President of Development',
    dates: 'Mar 2026 – Present',
    domain: null,
    monogram: 'TEK',
  },
  {
    company: 'Minuteman Equity Fund',
    role: 'Equity Research Analyst',
    dates: 'Sep 2024 – Dec 2025',
    domain: null,
    monogram: 'MEF',
  },
];

function Logo({ logo, domain, monogram }) {
  const initialSrc = logo || (domain ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : null);
  const [src, setSrc] = useState(initialSrc);

  if (!src) {
    return (
      <span className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-xs font-semibold text-[color:var(--accent)]">
        {monogram}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      onError={() => setSrc(domain && src === logo ? `https://icons.duckduckgo.com/ip3/${domain}.ico` : null)}
      className="flex-shrink-0 w-12 h-12 rounded-lg bg-white object-contain p-1.5 border border-gray-200 dark:border-gray-700"
    />
  );
}

function Card({ exp }) {
  return (
    <div className="flex items-center gap-4 w-80 flex-shrink-0 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 px-5 py-4">
      <Logo logo={exp.logo} domain={exp.domain} monogram={exp.monogram} />
      <div className="min-w-0">
        <p className="font-semibold leading-tight truncate">{exp.company}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300 truncate">{exp.role}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{exp.dates}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const loop = [...EXPERIENCES, ...EXPERIENCES];

  return (
    <section id="experience" className="py-24">
      <Reveal>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center tracking-tight">Experience</h2>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-6 py-2">
            {loop.map((exp, i) => (
              <Card key={`${exp.company}-${i}`} exp={exp} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
