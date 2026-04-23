import Image from "next/image";
import { FaFacebookF, FaInstagram, FaStar } from "react-icons/fa6";
import { schoolInfo, navLinks } from "@/constants/schoolData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid gap-10 px-0 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a href="#" className="inline-flex items-center gap-3 text-[var(--brand-primary)]">
            <Image src="/logo.png" alt="QUANTUM HEIGHTS School logo" width={64} height={64} className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16" />
            <div className="flex flex-col justify-center leading-tight">
              <span className="text-base font-extrabold uppercase tracking-[0.05em] text-[var(--brand-primary)] sm:text-lg">{schoolInfo.name}</span>
              <span className="mt-0.5 inline-flex flex-wrap items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.04em] text-slate-700 sm:text-xs">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <span>{schoolInfo.logoTagline}</span>
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </span>
              <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">{schoolInfo.logoSubtagline}</span>
            </div>
          </a>
          <div className="mt-6 rounded-3xl border border-[var(--brand-secondary)]/25 bg-[var(--brand-primary)]/5 p-4">
            <p className="text-sm font-semibold text-slate-900">For parents</p>
            <p className="mt-1 text-sm text-slate-600">Download the app to track updates, homework, and performance on mobile.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" aria-label="Download on Play Store" className="block transition hover:scale-[1.02]">
                <Image src="/playstore.webp" alt="Download on Google Play" width={140} height={42} className="h-10 w-auto" />
              </a>
              <a href="#" aria-label="Download on App Store" className="block transition hover:scale-[1.02]">
                <Image src="/appstore.webp" alt="Download on App Store" width={140} height={42} className="h-10 w-auto" />
              </a>
            </div>
          </div>
       
        </div>

        <div>
          <h5 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">Quick Links</h5>
          <ul className="mt-4 space-y-2 text-slate-600">
            {navLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition hover:text-[var(--brand-primary)]">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">Programs</h5>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>Foundational School</li>
            <li>Middle School Excellence</li>
            <li>Senior School + Career Tracks</li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-extrabold uppercase tracking-wider text-slate-900">Contact Info</h5>
          <ul className="mt-4 space-y-2 text-slate-600">
            <li>{schoolInfo.location}</li>
            {schoolInfo.phones.map((phone) => (
              <li key={phone}>
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="transition hover:text-[var(--brand-primary)]">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3 text-[var(--brand-primary)]">
            <a href="https://www.facebook.com/profile.php?id=61584411158223" aria-label="Facebook" className="rounded-full bg-[var(--brand-secondary)]/15 p-2" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/quantum_heights_school_kadapa/" aria-label="Instagram" className="rounded-full bg-[var(--brand-secondary)]/15 p-2" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
