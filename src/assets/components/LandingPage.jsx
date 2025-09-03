import React, { useRef } from "react";
import { Mail, Phone, Calendar } from "lucide-react";

const LandingPage = () => {
  // Refs for smooth scroll
  const paperRef = useRef(null);
  const workshopRef = useRef(null);
  const techRef = useRef(null);
  const nonTechRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
const contacts = [
  {
    initials: "V",
    name: "Gopinath",
    role: "Event Faculty Coordinator",
    email: "mrvgopinath@ksrce.ac.in",
    phone: "+91 9385405744",
  },
  {
    initials: "S",
    name: "Harish Rahul",
    role: "Student Event Coordinator",
    email: "harishrahul@ksriet.ac.in",
    phone: "+91 9384945040",
  },
];
  return (
  <div id="home-section" className="bg-gradient-to-br from-indigo-950 via-black to-purple-900 pt-30 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-8 md:mt-10">
        <h2 className="text-[16px] sm:text-1xl text-teal-300 mb-2 tracking-wide font-semibold drop-shadow">Department of CSE & CSD, KSRIET & KSRCE</h2>
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-500 animate-gradient-text drop-shadow-2xl mb-4">
          SPRING FEST 2K25
        </h1>
        <p className="mt-4 text-lg sm:text-[18px] text-indigo-100 max-w-2xl mx-auto leading-relaxed px-2">
          A National Level Technical Symposium by KSRIET & KSRCE – featuring Paper Presentations, AI-powered Workshops, and fun Non-Technical Events.
        </p>
      </section>

      {/* Option Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 py-10">
        <div
          onClick={() => scrollTo(paperRef)}
          className="cursor-pointer bg-gradient-to-br from-teal-700 to-indigo-700 p-6 rounded-xl shadow-lg hover:scale-105 transition border border-teal-400/30 hover:border-teal-300/60"
        >
          <h3 className="text-xl font-bold text-teal-200 mb-2">Paper Presentation</h3>
          <p className="text-indigo-100 text-sm">Emerging Technologies & Trends in Design</p>
        </div>

        <div
          onClick={() => scrollTo(workshopRef)}
          className="cursor-pointer bg-gradient-to-br from-indigo-700 to-purple-700 p-6 rounded-xl shadow-lg hover:scale-105 transition border border-indigo-400/30 hover:border-indigo-300/60"
        >
          <h3 className="text-xl font-bold text-indigo-200 mb-2">Workshop</h3>
          <p className="text-purple-100 text-sm">Code Smarter with GitHub Copilot</p>
        </div>

        <div
          onClick={() => scrollTo(techRef)}
          className="cursor-pointer bg-gradient-to-br from-teal-800 to-indigo-800 p-6 rounded-xl shadow-lg hover:scale-105 transition border border-teal-400/30 hover:border-teal-300/60"
        >
          <h3 className="text-xl font-bold text-teal-200 mb-2">Technical Events</h3>
          <p className="text-indigo-100 text-sm">Reverse Coding, Bug Busters, Poster Making</p>
        </div>

        <div
          onClick={() => scrollTo(nonTechRef)}
          className="cursor-pointer bg-gradient-to-br from-purple-800 to-indigo-800 p-6 rounded-xl shadow-lg hover:scale-105 transition border border-purple-400/30 hover:border-purple-300/60"
        >
          <h3 className="text-xl font-bold text-purple-200 mb-2">Non-Technical Events</h3>
          <p className="text-indigo-100 text-sm">Mini Auction, Connections, Photography</p>
        </div>
      </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto md:mt-20 px-6 py-16">
        {/* About Sporix */}
        <div>
          <h2 className="text-3xl font-bold text-teal-200 mb-4">ABOUT SPORIX</h2>
          <p className="text-indigo-100 text-[18px] md:text-xl md:leading-loose">
            Sporix is a national-level spring fest jointly hosted by the Department of 
            Computer Science and Engineering (KSRIET & KSRCE). It features a wide range of 
            events including paper presentations, technical workshops, and fun-filled non-technical 
            activities. 
            <br /><br />
            Bringing together innovators, learners, and leaders, Sporix is the hub where ideas 
            turn into reality, skills get sharpened, and talents shine.
          </p>
        </div>

        {/* Why Join Sporix */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-200 mb-4">WHY SPORIX?</h2>
          <ul className="space-y-4 text-indigo-100">
            <li className="bg-gradient-to-r from-teal-900 via-indigo-900 to-purple-900 p-4 rounded-lg shadow-md border border-teal-700/30">
              🎯 Participate in Paper Presentations & Workshops
            </li>
            <li className="bg-gradient-to-r from-teal-900 via-indigo-900 to-purple-900 p-4 rounded-lg shadow-md border border-indigo-700/30">
              🤝 Collaborate with peers and showcase your talent
            </li>
            <li className="bg-gradient-to-r from-teal-900 via-indigo-900 to-purple-900 p-4 rounded-lg shadow-md border border-purple-700/30">
              🏆 Win exciting prizes & gain recognition
            </li>
            <li className="bg-gradient-to-r from-teal-900 via-indigo-900 to-purple-900 p-4 rounded-lg shadow-md border border-teal-700/30">
              🚀 Explore both technical and non-technical events
            </li>
            <li className="bg-gradient-to-r from-teal-900 via-indigo-900 to-purple-900 p-4 rounded-lg shadow-md border border-indigo-700/30">
              🌟 Build memories and experiences beyond academics
            </li>
          </ul>
        </div>
      </section>
       {/* Contact Team Section */}
  <section id="contact-section" className="py-16 text-center rounded-xl shadow-lg mx-2 sm:mx-8 mt-8 ">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-indigo-300 to-purple-300 drop-shadow-lg mb-6">CONTACT TEAM</h2>
        <p className="text-indigo-200 mb-12 px-1">
          Ready to revolutionize the future? Connect with our coordinators who are here to guide your journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-teal-800 via-indigo-900 to-purple-800 border border-teal-600/30 rounded-lg p-3 sm:p-6 text-left flex flex-col items-start shadow-xl w-full max-w-xs mx-auto sm:max-w-none"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-teal-400 to-purple-400 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full text-lg shadow-md">
                  {contact.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-teal-100">{contact.name}</h3>
                  <p className="text-indigo-300 text-sm">{contact.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-indigo-100 text-sm">
                <p className="flex items-center gap-2">
                  <Mail size={16} /> {contact.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> {contact.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-gradient-to-r from-indigo-950 via-black to-purple-950 text-white p-8 mt-8 rounded-xl shadow-inner border-t border-indigo-900/40">
        <p className="text-center text-xs text-indigo-300">&copy; 2025 Sporix | KSRIET & KSRCE. All rights reserved.</p>
      </div>
      
    </div>
  );
};

export default LandingPage;
