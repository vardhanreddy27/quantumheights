import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { schoolInfo } from '@/constants/schoolData';

// EXACT ADDRESS FOR QUANTUM HEIGHTS
const SCHOOL_ADDRESS = "Quantum Heights English Medium School, Prakash Nagar, Kadapa, Chinna Chauku, Andhra Pradesh 516004";

const contactDetails = [
  {
    icon: Phone,
    title: schoolInfo.phones[0],
    description: "Call our admissions desk for fee details, campus visits, and program guidance.",
    meta: "Admissions desk • Mon-Sat, 9:00 AM - 5:00 PM",
    bgColor: "bg-[#efe1e3]",
    textColor: "text-slate-800",
    iconColor: "text-[var(--brand-primary)]",
    shadow: "border border-[var(--brand-primary)]/20",
    link: `tel:${schoolInfo.phones[0].replace(/\s+/g, '')}`, 
  },
  {
    icon: FaWhatsapp,
    title: schoolInfo.phones[1],
    description: "Reach us on WhatsApp for quick responses on admissions, transport, and timings.",
    meta: "Fast replies for admissions & transport support",
    bgColor: "bg-[#e8f7ef]",
    textColor: "text-slate-800",
    iconColor: "text-[#1fa855]",
    shadow: "border border-[#1fa855]/25",
    link: `https://wa.me/${schoolInfo.phones[1].replace(/[^0-9]/g, '')}`,
  },
  {
    icon: MapPin,
    title: "Prakash Nagar, Kadapa",
    description: "Visit our campus in Prakash Nagar for infrastructure tour and counseling.",
    meta: "Campus visits by appointment",
    bgColor: "bg-[#fff5db]",
    textColor: "text-slate-800",
    iconColor: "text-[var(--brand-primary)]",
    shadow: "shadow-sm border border-[var(--brand-secondary)]/35",
    // This will open the user's Map app or Google Maps in a new tab
    link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL_ADDRESS)}`,
  },
];

function Contact() {
  // Free Google Maps Embed URL using search
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(SCHOOL_ADDRESS)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="contact" className="bg-[#faf8f2] pt-9">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight text-[var(--brand-primary)] md:text-4xl">
            Get in Touch With QUANTUM HEIGHTS
          </h2>
          <p className="mb-3 mt-4 text-base text-slate-600 md:text-lg">
            Call or WhatsApp our admissions team, or visit our campus in Kadapa for complete guidance.
          </p>
        </div>

        <div className="mb-10 mt-7 grid grid-cols-1 gap-5 sm:mt-9 sm:gap-6 md:grid-cols-3">
          {contactDetails.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`
                ${item.bgColor} ${item.textColor} ${item.shadow || ''} 
                flex min-h-[200px] flex-col gap-4 rounded-[2rem] p-6 
                sm:min-h-[220px] sm:rounded-[2.2rem] sm:p-8 
                md:min-h-[230px] md:p-8 
                lg:min-h-[250px] lg:rounded-[2.5rem] lg:p-10
                transition-all duration-300 hover:scale-[1.03] hover:shadow-md active:scale-[0.98] cursor-pointer
              `}
            >
              <div className="flex items-center gap-4">
                <div className={item.iconColor}>
                  <item.icon className="h-8 w-8 sm:h-9 sm:w-9" />
                </div>
                <h3 className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed opacity-90 sm:text-[0.95rem]">
                {item.description}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                  {item.meta}
                </p>
                <span className="text-[10px] font-black opacity-40">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Full-width Map Section */}
        <div className="relative left-1/2 right-1/2 mt-2 h-[300px] w-screen -translate-x-1/2 overflow-hidden border-t border-slate-200 bg-white sm:h-[360px] md:h-[400px] lg:h-[440px]">
          <iframe
            title="Quantum Heights Kadapa Map"
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;