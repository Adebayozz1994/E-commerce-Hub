'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const About = () => {
  const [text, setText] = useState('');
  const fullText =
    'A Passionate Software Developer Crafting Digital Experiences';

  useEffect(() => {
    let index = 0;

    const typingEffect = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingEffect);
      }
    }, 100); // Adjust typing speed here (100ms per character)

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-900 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/back.png" // Replace with your image path
          alt="Developer"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold">Hi, I m Ogunlade Adebayo</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            {text}
            <span className="animate-blink">|</span>
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">
          Hello! My name is Ogunlade Adebayo and I am a full-stack developer, a software developer with a passion for
          building innovative solutions that make a difference. I specialize in
          creating user-friendly web applications and bringing creative ideas
          to life through code.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
          Education
        </h3>
        <p className="text-gray-300 mb-8">
          Bachelor of Technology in Chemistry - FUTMinna University (Graduated
          2019)
        </p>

        <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
          Experience
        </h3>
        <ul className="text-gray-300 list-disc pl-6 mb-8">
          <li>Frontend Developer at SQI College (2023 - Present)</li>
          <li>Freelance Web Developer (2023 - 2025)</li>
        </ul>

        <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
          Projects
        </h3>
        <ul className="text-gray-300 list-disc pl-6 mb-8">
          <li>
            <strong>Portfolio Website:</strong> Designed and developed a
            personal portfolio to showcase my skills and projects.
          </li>
          <li>
            <strong>E-Commerce App:</strong> Built a full-stack e-commerce
            platform with a responsive UI and secure backend.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
          Personal Life & Hobbies
        </h3>
        <p className="text-gray-300 leading-relaxed">
          When I m not coding, I love exploring nature, photography, and trying
          out new cuisines. I enjoy playing Football and reading about new
          technologies. Balancing work and personal life is key to my
          creativity.
        </p>
      </div>
    </div>
  );
};

export default About;
