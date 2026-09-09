import React from 'react';
import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-4 py-24">
      <Reveal className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 md:p-10 transition-colors glow-card">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">Hi! My name is Yash Sawhney — a junior at the University of Massachusetts Amherst, studying Computer Science and Economics in the Commonwealth Honors College.</p>
        <p className="mb-4">Most recently I've worked as a Data Engineer Intern at The Hanover Insurance Group, building metadata-parsing pipelines and cutting compute costs across hundreds of production data pipelines. Before that I was an ML Intern at Saama Technologies, benchmarking LLMs and deploying NLP models into production.</p>
        <p className="mb-4">What I love is the real-world application of technology — building things that make people's lives easier. Data is really messy, and cleaning it and transforming it through pipelines is work that's needed more than people realize: it's what lets teams get true insights and understand the real business impact behind the numbers. That's where I want my impact to come through.</p>
        <p className="mb-4">When I'm not coding or deep in classwork, you'll usually find me outside — hiking, playing basketball, taking photos, or exploring new places (Barcelona is next on my bucket list!).</p>
        <p>Thanks for stopping by!</p>
      </Reveal>
    </section>
  );
} 