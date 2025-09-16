import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";
import Masonry from './Masonry';
import Navbar from "./Navbar";

const items = [
  {
    id: "1",
    img: "Culturals3.mp4",
    url: "https://example.com/one",
    height: 400,
  },
  {
    id: "2",
    img: "pic9.png",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "3",
    img: "Culturals.mp4",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "4",
    img: "pic7.png",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "5",
    img: "Culturals8.mp4",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "6",
    img: "pic6.png",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "7",
    img: "Culturals6.mp4",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "8",
    img: "pic1.png",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "9",
    img: "Culturals2.mp4",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "10",
    img: "pic2.png",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "11",
    img: "Culturals1.mp4",
    url: "https://example.com/three",
    height: 600,
  },
  {
    id: "12",
    img: "pic3.png",
    url: "https://example.com/two",
    height: 250,
  },
  {
    id: "13",
    img: "pic8.png",
    url: "https://example.com/two",
    height: 250,
  },
];

export default function SpringFeastLanding() {
  const eventDate = new Date("2025-10-10T09:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

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
    const t = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  const events = [
    {
      title: "Paper Presentation 📜",
      gradient: "from-teal-400 via-indigo-500 to-purple-600",
      activities: [
        "AI & ML Papers",
        "IoT Innovations",
        "Blockchain & Web3",
        "Robotics & Automation",
      ],
      submission: "sporixassociation@gmail.com",
    },
    {
      title: "Workshop 🧑‍💻",
      gradient: "from-pink-400 via-amber-400 to-indigo-500",
      activities: ["Code Smarter with GitHub Copilot — The AI-Powered Developer Workshop"],
      KeyBenefits: [
        "Boost Productivity",
        "Code Smarter, Not Harder",
        "Hands-on Demos",
      
      ],
    },
    {
      title: "Technical Events 💻",
      gradient: "from-indigo-400 via-purple-500 to-pink-500",
      activities: ["Reverse Coding", "Bug Buster Hunt", "Ideate Poster Maker"],
      KeyBenefits: [
        "Sharpen coding, debugging & problem-solving skills in fun challenges.",
      ],
    },
    {
      title: "Non-Technical 🎭",
      gradient: "from-amber-300 via-pink-400 to-purple-400",
      activities: ["Mini Auction", "Connections", "Photography"],
      KeyBenefits: [
        "Fun-filled events to spark creativity, laughter & memories.",
      ],
    },
  ];

  const timeline = [
    { date: "Oct 4, 2025", note: "Registration Deadline" },
    { date: "Oct 5, 2025", note: "Paper Submission Ends" },
    { date: "Oct 6, 2025", note: "Submission Intimation" },
    { date: "Oct 9, 2025", note: "Symposium Day - SPRING FEAST 2K25" },
  ];

  const coordinators = [
    {
      name: "Gopinath V",
      role: "Faculty Co-ordinator",
      phone: "9842680244",
      email: "gopicse24@gmail.com",
    },
    {
      name: "Harish Rahul K",
      role: "Student Lead",
      phone: "9360218934",
      email: "harishrahulk@gmail.com",
    },
    {
      name: "Harish E R",
      role: "Student Lead",
      phone: "8825746520",
      email: "harisher1712@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-purple-900 text-white font-sans">
      {/* Anchor for Home section */}
      <div id="home-section"></div>
      {/* HERO */}
      <header className="container mx-auto px-6 py-12">
        <nav className="flex items-center justify-between">
          <Navbar />
        </nav>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-medium opacity-80">
              KSRIET &amp; KSRCE Presents
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-pink-300 to-white drop-shadow-2xl">
              <span className="block animate-pulse-glow">SPRING FEAST 2K25</span>
            </h1>

            <p className="mt-4 max-w-xl opacity-80">
              National Level Technical Symposium by CSE &amp; CSD – Paper
              Presentations, AI Workshops &amp; Fun Events
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <div className="bg-gradient-to-r from-indigo-700/30 to-purple-700/20 p-4 rounded-2xl shadow-inner backdrop-blur-sm">
                <div className="flex gap-4 items-center">
                  <div className="grid grid-cols-4 text-center min-w-[320px] md:min-w-[380px]">
                    <TimePill label="Days" value={timeLeft.days} />
                    <TimePill label="Hours" value={timeLeft.hours} />
                    <TimePill label="Minutes" value={timeLeft.minutes} />
                    <TimePill label="Seconds" value={timeLeft.seconds} />
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="https://docs.google.com/forms/d/e/1FAIpQLSfRc6SZEt8dJol300_Nh45X4XtxA6EcqS97uW258pUKBe5R1w/formResponse"
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-indigo-500 text-black px-6 py-3 rounded-full font-semibold shadow-2xl"
              >
                Register Now 🚀 <MdOutlineArrowForward />
              </motion.a>
            </div>

            <p className="mt-6 text-sm opacity-70">
              Join innovators, coders, artists and leaders across India for two
              days of high-energy tech, talks, workshops and culture.
            </p>
          </motion.div>

          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </header>

  {/* Anchor for About section */}
  <div id="about-section"></div>
  {/* EVENT CARDS */}
  <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((ev) => (
            <motion.div
              key={ev.title}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl p-6 overflow-hidden shadow-xl`}
            >
              <div
                className={`absolute inset-0 blur-3xl opacity-80 bg-gradient-to-br ${ev.gradient}`}
              />
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2">{ev.title}</h3>
                <p className="opacity-80 text-sm">
                  Explore exciting tracks and hands-on activities.
                </p>

                <div className="mt-4 rounded-lg bg-white/10 p-3 space-y-3">
                  {/* Activities */}
                  {ev.activities?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Activities</h4>
                      <ul className="space-y-1">
                        {ev.activities.map((a) => (
                          <li key={a} className="text-sm opacity-95">
                            • {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Key Benefits */}
                  {ev.KeyBenefits?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-sm mb-2">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2">
                        {ev.KeyBenefits.map((b, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-white"
                          >
                            <span className="w-2 h-2 rounded-full bg-white" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Submission Email */}
                  {ev.submission && (
                    <div className="mt-4 p-2 rounded bg-blue-900/30 text-blue-200 text-xs font-semibold flex items-center gap-2">
                      <span>Submission Email:</span>
                      <a
                        href={`mailto:${ev.submission}`}
                        className="underline"
                      >
                        {ev.submission}
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {ev.title === "Workshop 🧑‍💻" ? (
                    <a
                      className="text-sm font-semibold inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSemLPmyVuwspL8kLl5j7jT6OTSr1ckkRjRI7PfGVD11hTaCuA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register
                    </a>
                  ) : (
                    <a
                      className="text-sm font-semibold inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfRc6SZEt8dJol300_Nh45X4XtxA6EcqS97uW258pUKBe5R1w/formResponse"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register
                    </a>
                  )}
                  {/* <a className="text-sm" href="#register">
                    Register
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Symposium Updates */}
      <section className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-start">
          <div className="md:w-1/2  md:mt-10 md:pl-10">
            <h2 className="text-3xl font-bold mb-4">Symposium Updates</h2>
            <div className="relative md:mt-10">
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-pink-400 rounded" />
              <div className="pl-8 md:pl-16">
                {timeline.map((t, i) => (
                  <div
                    key={t.date}
                    className="mb-6 relative flex flex-row items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center shadow-lg text-black font-bold">
                      {i + 1}
                    </div>
                    <p className="text-sm opacity-80 text-left md:text-base md:font-semibold">
                      {t.date}
                    </p>
                    <div className="flex-1">
                      <div className="mt-2 p-3 rounded-lg bg-white/5 backdrop-blur-sm text-left md:text-base">
                        <p className="font-semibold">{t.note}</p>
                        <p className="text-sm opacity-75 mt-1">
                          Stay tuned for official announcements and deadlines.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Sporix */}
          <div className="md:w-1/2 pr-2 md:pr-20 mt-10 flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold mb-3 text-center">
              About Sporix
            </h2>
            <p className="opacity-80 mb-3 text-center">
              Sporix (Spring Feast) is the annual national level technical
              symposium hosted by KSRIET &amp; KSRCE that brings together
              students, researchers and industry practitioners to showcase
              innovations, learn in hands-on workshops, compete in technical
              events and celebrate culture. Expect keynote talks, intensive AI
              workshops, paper tracks and an energetic cultural night.
            </p>
            <h3 className="text-2xl font-semibold text-center mt-7 mb-5">
              Why Join
            </h3>
            <ul className="w-full px-3">
              {[
                {
                  emoji: "🎯",
                  title: "Paper Presentations",
                  desc: "Publish & present original research and prototypes",
                },
                {
                  emoji: "🤝",
                  title: "Networking",
                  desc: "Connect with peers and industry mentors",
                },
                {
                  emoji: "🚀",
                  title: "Technical & Non-Technical",
                  desc: "Hackathons, workshops and cultural events",
                },
                {
                  emoji: "🌟",
                  title: "Fun",
                  desc: "Food, music and memories",
                },
              ].map((r) => (
                <li
                  key={r.title}
                  className="flex items-start gap-3 py-2 border-b border-white/10 last:border-b-0"
                >
                  <span className="text-2xl">{r.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-base">{r.title}</h4>
                    <p className="text-sm opacity-80">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

  {/* Anchor for Contact section */}
  <div id="contact-section"></div>
  {/* CONTACT */}
  <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">Contact Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {coordinators.map((c) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={c.email}
              className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/3 shadow-lg flex items-center gap-4"
            >
              <div className="flex-1">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm opacity-75">{c.role}</p>
                <div className="mt-2 flex items-center gap-3 text-sm opacity-90">
                  <a
                    href={`mailto:${c.email}`}
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    <FiMail /> {c.email}
                  </a>
                </div>
              </div>
              <div>
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10"
                >
                  {c.phone}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <hr className="border-t border-white/20  mx-6" />
      <footer className="text-white py-8 px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">&copy; 2025 Sporix’25 | KSRIET & KSRCE. All Rights Reserved.</p>
        <div className="flex gap-6 text-2xl">
          <a
            href="https://www.instagram.com/ksrce_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/ksrce/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
    
  );
}

function TimePill({ label, value }) {
  return (
    <div className="p-2 mx-1">
      <div className="text-2xl md:text-3xl font-extrabold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs opacity-70">{label}</div>
    </div>
  );
}
