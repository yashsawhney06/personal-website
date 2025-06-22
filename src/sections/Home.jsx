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
    const roles = ["a Computer Science and Economics Student", "a Product/Software Engineer", "a Tech/Management Enthusiast"];
    const typedRoles = useTypingEffect(roles, true);

  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center fade-in">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-cyan-400 font-medium mb-2 text-lg glow-text">Hello World, I'm</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2 tracking-tight">
            Yash Sawhney
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            And I am {typedRoles}
            <span className="cursor-blink">|</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            I am a passionate computer science and economics student with a love for building software and managing products that solve real-world problems!
          </p>
          <p className="text-cyan-400 font-medium text-lg glow-text">
            Welcome to my portfolio <span role="img" aria-label="wave">👋🏻</span>
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <span className="glow-avatar">
            <img
              src="/avatar.png"
              alt="Avatar"
              className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full"
            />
          </span>
        </div>
      </div>
    </section>
  );
} 