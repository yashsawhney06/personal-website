import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from './components/Icons';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 ambient-bg" aria-hidden="true" />
);

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div>
      <AmbientBackground />
      <nav className="fixed w-full z-20 top-0 left-0 bg-[#fbfbfd]/80 dark:bg-black/70 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-bold text-lg tracking-tight">Yash Sawhney</a>
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-3 py-2 rounded-md transition-colors font-medium hover:bg-black/5 dark:hover:bg-white/5 ${
                    isActive
                      ? 'text-[color:var(--accent)]'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          <button
            aria-label="Toggle dark mode"
            className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setDark(d => !d)}
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </nav>
      <main className="pt-20 md:pt-24 relative z-10">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
} 