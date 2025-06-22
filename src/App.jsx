import React, { useEffect, useState, useRef } from 'react';
import { SunIcon, MoonIcon } from './components/Icons';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1000;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.speedZ = (Math.random() - 0.5) * 2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.z += this.speedZ;

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
        if (this.z < 0) this.z = 1000;
        if (this.z > 1000) this.z = 0;
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x = this.x * scale;
        const y = this.y * scale;
        const size = this.size * scale;

        ctx.save();
        ctx.globalAlpha = this.opacity * scale;
        ctx.fillStyle = '#22d3ee'; // Cyan color
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle1, i) => {
        particlesRef.current.slice(i + 1).forEach(particle2 => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

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
      <ParticleBackground />
      <nav className="fixed w-full z-20 top-0 left-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#home" className="font-bold text-lg tracking-tight">Yash Sawhney</a>
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="px-3 py-2 rounded-md hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium">
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
        <Skills />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
} 