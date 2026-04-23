import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

const achievementData = [
  {
    name: "Dr. Arun Reddy",
    role: "Principal",
    image: "/principal1.jpg",
    signature: "/sign1.jpeg",
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Head of Academics",
    image: "/principal2.jpg",
    signature: "/sign1.jpeg",
  },
  {
    name: "Mr. Vardhan Reddy",
    role: "IIT-JEE Coordinator",
    image: "/principal3.jpg",
    signature: "/sign1.jpeg",
  },
];

function Achievements() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--brand-primary)] sm:text-4xl">
            Meet Our Leadership Team
          </h2>
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            Our dedicated educators and mentors are the backbone of student success, 
            combining years of expertise with a passion for excellence.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {achievementData.map((member, index) => (
            <div key={index} className="group relative">
              {/* Main Image Container */}
              <div className="relative h-[400px] overflow-hidden rounded-[2rem] sm:h-[440px] sm:rounded-[2.2rem] md:h-[460px] lg:h-[480px] lg:rounded-[2.5rem]">
                <Image
                  src={member.image}
                  alt={member.name + ' - Quantum Heights School Leadership'}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
                
                {/* Floating Info Card (Bottom of Image) */}
                <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-white p-5 shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{member.name}</h3>
                      <p className="text-xs font-medium text-primary text-[var(--brand-primary)] uppercase tracking-wider mt-1">{member.role}</p>
                    </div>
                    <a 
                      href="#" 
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 text-slate-400 hover:bg-slate-900 hover:text-white transition-colors"
                    >
                      <FaLinkedinIn size={14} />
                    </a>
                  </div>

                  {/* Signature nested inside the card */}
                  <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-3">
                    <span className="text-[9px] uppercase tracking-tighter text-slate-400">Verified Professional</span>
                    <Image
                      src={member.signature}
                      alt={member.name + ' signature - Quantum Heights School'}
                      width={56}
                      height={56}
                      className="h-14 w-auto object-contain opacity-70 contrast-125 grayscale"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;