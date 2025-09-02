import React from "react";
import { Mail, Phone } from "lucide-react";

const events = [
  { name: "Paper Presentation" },
  { name: "Technical Workshop" },
  { name: "Non-Technical Events" },
//   { name: "DevForge Internal" },
//   { name: "Mosaic Internal" },
//   { name: "BizPulse Internal" },
];

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

const LandingPage = () => {
  return (
  <div className="bg-black text-white min-h-screen pt-25 font-sans">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300 drop-shadow-lg mb-6">KSRCE & KSRIET Proudly Present's</h2>
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300 drop-shadow-lg">DevSpark’2k25</h1>
  <p className="mt-4 text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Department of Computer Science and Engineering,KSRIET & KSRCE are proud to present DevSpark’2k25, a national-level tech event jointly organised and hosted by KSRIET and KSRCE, featuring events like paper presentation, workshops, and exciting non-technical events.
        </p>
        <div className="mt-8 space-y-4 flex flex-col items-center">
          {events.map((event, index) => (
            <button
              key={index}
              className="w-80 py-3 px-6 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-400 text-white font-bold rounded-md shadow-lg hover:scale-105 hover:bg-gradient-to-l transition"
            >
              {event.name}
            </button>
          ))}
        </div>
      </section>

      {/* Contact Team Section */}
      <section className="py-16 bg-transparent text-center">
  <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300 drop-shadow-lg mb-6">CONTACT TEAM</h2>
        <p className="text-blue-200 mb-12 px-1">
          Ready to revolutionize the future? Connect with our coordinators who are here to guide your journey.
        </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-2 sm:px-0">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-blue-800 via-violet-800 to-blue-700 border border-blue-600 rounded-lg p-3 sm:p-6 text-left flex flex-col items-start shadow-xl w-full max-w-xs mx-auto sm:max-w-none"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-blue-400 to-violet-400 text-white font-bold w-12 h-12 flex items-center justify-center rounded-full text-lg shadow-md">
                  {contact.initials}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100">{contact.name}</h3>
                  <p className="text-blue-300 text-sm">{contact.role}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-blue-100 text-sm">
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
    </div>
  );
};

export default LandingPage;
