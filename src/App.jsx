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

const AmbientBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 ambient-bg" aria-hidden="true" />
);

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

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
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="px-3 py-2 rounded-md hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium">
                {link.name}
              </a>
            ))}
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