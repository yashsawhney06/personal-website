import React from 'react';

export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 transition-colors glow-card">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="mb-4">Hi! My name is Yash Sawhney — a junior at the University of Massachusetts Amherst, studying Computer Science and Economics in the Commonwealth Honors College.</p>
        <p className="mb-4">Most recently I've worked as a Data Engineer Intern at The Hanover Insurance Group, building metadata-parsing pipelines and cutting compute costs across hundreds of production data pipelines. Before that I was a Machine Learning Fellow at Handshake AI and an ML Intern at Saama Technologies, benchmarking LLMs and deploying NLP models into production.</p>
        <p className="mb-4">What I'm passionate about is the real-world application of technology, especially within the financial sector. I'm fascinated by how computer science can be used to build smarter systems, uncover insights, and drive better decision-making. That's why I'm drawn to product — not just designing what people use, but understanding how it works under the hood.</p>
        <p className="mb-4">When I'm not coding or deep in classwork, you'll usually find me outside — hiking, playing basketball, taking photos, or exploring new places (Barcelona is next on my bucket list!).</p>
        <p>Thanks for stopping by!</p>
      </div>
    </section>
  );
} 