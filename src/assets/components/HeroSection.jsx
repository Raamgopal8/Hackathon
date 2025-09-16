import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const titleRef = useRef([]);
  const cardRefs = useRef([]);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const eventDate = new Date("2025-11-08T09:00:00");

  function getTimeLeft() {
    const now = new Date();
    const diff = Math.max(0, eventDate - now);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Animate title letters
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50, textShadow: "0px 0px 0px #fff" },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 1.2,
        ease: "back.out(1.7)",
        textShadow: "0px 0px 10px #fff, 0px 0px 20px #ff0080",
        repeat: -1,
        yoyo: true,
      }
    );

    // Animate cards hover tilt
    cardRefs.current.forEach((card, i) => {
      gsap.set(card, { rotationY: 0 });
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { rotationY: 10, duration: 0.3, ease: "power1.out" });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationY: 0, duration: 0.3, ease: "power1.out" });
      });
    });
  }, []);

  const eventCards = [
    { title: "Paper Presentation 📜", color: "from-teal-400 via-indigo-500 to-purple-600" },
    { title: "Workshop 🧑‍💻", color: "from-pink-400 via-amber-400 to-indigo-500" },
    { title: "Technical Events 💻", color: "from-indigo-400 via-purple-500 to-pink-500" },
    { title: "Non-Technical 🎭", color: "from-amber-300 via-pink-400 to-purple-400" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Floating particle circles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-teal-400 to-pink-500 opacity-20"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float${i % 5} ${Math.random() * 10 + 10}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      <div className="z-10 text-center px-6">
        <p className="text-lg opacity-70 mb-2">KSRIET & KSRCE Presents</p>
        <h1 className="text-6xl md:text-8xl font-extrabold flex flex-wrap justify-center">
          {"SPRING FEAST 2K25".split("").map((char, i) => (
            <span
              key={i}
              ref={(el) => (titleRef.current[i] = el)}
              className="inline-block mx-0.5"
            >
              {char}
            </span>
          ))}
        </h1>
        <p className="mt-4 text-xl md:text-2xl opacity-80">
          National Level Technical Symposium – Paper Presentations, AI Workshops & Fun Events
        </p>

        {/* Countdown */}
        <div className="mt-8 flex gap-4 justify-center text-black font-bold text-xl">
          {Object.entries(timeLeft).map(([key, val], i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg min-w-[60px]"
            >
              <div>{String(val).padStart(2, "0")}</div>
              <div className="text-xs opacity-70">{key}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Event cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 z-10">
        {eventCards.map((card, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`w-48 h-48 rounded-3xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-2xl text-center text-xl font-semibold cursor-pointer transform transition-transform`}
          >
            {card.title}
          </div>
        ))}
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes float0 { 0% { transform: translateY(0); } 100% { transform: translateY(-20px); } }
        @keyframes float1 { 0% { transform: translateY(0); } 100% { transform: translateY(25px); } }
        @keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(-30px); } }
        @keyframes float3 { 0% { transform: translateY(0); } 100% { transform: translateY(15px); } }
        @keyframes float4 { 0% { transform: translateY(0); } 100% { transform: translateY(-25px); } }
      `}</style>
    </section>
  );
};

export default HeroSection;
