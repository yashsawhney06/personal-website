import React, { useState, useEffect } from 'react';

const useTypingEffect = (text, loop = false, typingSpeed = 150, deletingSpeed = 75, pauseDuration = 1000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = Array.isArray(text) ? text[textIndex] : text;

      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText(currentText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          if (Array.isArray(text) && loop) {
            setTextIndex((prev) => (prev + 1) % text.length);
          }
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText(currentText.substring(0, displayedText.length + 1));
        } else {
          if (loop) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, text, loop, textIndex, typingSpeed, deletingSpeed, pauseDuration]);

  return displayedText;
};

const SocialIcons = () => {
    // Icons will be added here
    return null
}

export default function Home() {
    const roles = ["a Computer Science and Economics Student", "a Data/Machine Learning Engineer", "a Product & Tech Enthusiast"];
    const typedRoles = useTypingEffect(roles, true);

  return (
    <section id="home" className="min-h-[88vh] flex items-center justify-center fade-in px-4">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <span className="glow-avatar mb-10">
          <img
            src="/avatar.png"
            alt="Avatar"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full"
          />
        </span>
        <span className="font-semibold mb-3 text-base md:text-lg glow-text tracking-wide uppercase">
          Hello World, I'm
        </span>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">
          Yash Sawhney
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-gray-500 dark:text-gray-400 mb-6 tracking-tight">
          And I am {typedRoles}
          <span className="cursor-blink">|</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
          I build data pipelines, train ML models, and ship products that solve real-world problems.
        </p>
        <p className="font-semibold text-lg glow-text">
          Welcome to my portfolio <span role="img" aria-label="wave">👋🏻</span>
        </p>
      </div>
    </section>
  );
} 