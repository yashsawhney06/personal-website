import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('https://formspree.io/f/xzzgalpp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Contact</h2>
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          required
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold py-2 rounded transition-colors mt-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        
        {submitStatus === 'success' && (
          <p className="text-green-600 dark:text-green-400 text-center mt-2">
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 dark:text-red-400 text-center mt-2">
            Failed to send message. Please try again or email me directly.
          </p>
        )}
      </form>
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://www.linkedin.com/in/yash-saw/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors text-2xl">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606zm0 0"/></svg>
        </a>
        <a href="https://github.com/yashsawhney06" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors text-2xl">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="mailto:yash.sawhney@outlook.com" aria-label="Email" className="text-gray-500 hover:text-red-600 dark:hover:text-red-400 transition-colors text-2xl">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.99-7.065v14c0 1.104.896 2 2 2h19.98c1.104 0 2-.896 2-2v-14l-11.99 7.065zm11.99-9.065c0-1.104-.896-2-2-2h-19.98c-1.104 0-2 .896-2 2v.217l12 7.083 11.98-7.083v-.217z"/></svg>
        </a>
      </div>
    </section>
  );
} 