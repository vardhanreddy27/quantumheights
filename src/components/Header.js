import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPhoneAlt,  } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { schoolInfo, navLinks } from "@/constants/schoolData";
import { FaStar } from "react-icons/fa6";


export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <div className="hidden bg-[var(--brand-primary)] text-xs font-semibold tracking-wide text-white sm:block">
        <div className="mx-auto flex flex-col gap-2 px-4  sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <a
              href="https://www.facebook.com/profile.php?id=61584411158223"
              aria-label="Facebook"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full"
              target="_blank" rel="noopener noreferrer"
            >
              <FaFacebookF className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.instagram.com/quantum_heights_school_kadapa/"
              aria-label="Instagram"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full"
              target="_blank" rel="noopener noreferrer"
            >
              <FaInstagram className="h-3.5 w-3.5" />
            </a>
           
          </div>

          <div className="text-center sm:flex-1">Admissions Open 2026-27 • {schoolInfo.tagline}</div>

          <div className="flex flex-wrap items-center justify-start gap-2 text-[11px] sm:justify-end sm:text-xs">
            <a href="tel:+919390898250" className="inline-flex items-center gap-1.5 transition hover:text-[var(--brand-secondary)]">
              <FaPhoneAlt className="h-3 w-3" />
              <span>+91 9390898250</span>
            </a>
            <span className="text-white/70">|</span>
            <a href="tel:+916303507136" className="inline-flex items-center gap-1.5 transition hover:text-[var(--brand-secondary)]">
              <span>+91 6303507136</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto grid grid-cols-[1fr_auto] items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 md:grid-cols-[1fr_auto_1fr] md:gap-0 md:py-0 lg:px-8">
          <a href="#" className="justify-self-start text-[var(--brand-primary)]">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src="/logo.jpg" alt="QUANTUM HEIGHTS School logo" width={52} height={67} className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12 md:h-18 md:w-18 lg:h-[74px] lg:w-[74px]" priority />
              <div className="flex flex-col text-center justify-center leading-tight">
                <span className="mt-0.5 flex w-full justify-center text-base font-extrabold text-[var(--brand-primary)] sm:text-lg lg:text-lg">
               
                  <span className="uppercase tracking-[0.05em]">{schoolInfo.name}</span>
             
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.04em] text-slate-700 sm:text-xs">
                       <span className="inline-flex ">
                    <FaStar className="inline text-yellow-500" />
                    <FaStar className="inline text-yellow-500" />
                    <FaStar className="inline text-yellow-500" />
                  </span>
                    
                   {" "} {schoolInfo.logoTagline}{""}
                       <span className="inline-flex  ">
                    <FaStar className="inline text-yellow-500" />
                    <FaStar className="inline text-yellow-500" />
                    <FaStar className="inline text-yellow-500" />
                  </span>
                    
                    </span>
                <span className="text-[10px] font-semibold text-slate-600 sm:text-xs">{schoolInfo.logoSubtagline}</span>
              </div>
            </div>
          </a>

          <nav className="hidden items-center justify-center gap-6 text-sm font-semibold text-slate-700 md:flex">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[var(--brand-primary)]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center justify-self-end gap-2 md:justify-self-end">
            <a
              href="tel:+919390898250"
              className="hidden rounded-xl bg-[var(--brand-primary)] px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
            >
              Contact for Admission
            </a>
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-300 text-slate-700 md:hidden"
              aria-label="Toggle menu"
              type="button"
            >
              {isMobileOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileOpen && (
          <div className="border-t border-slate-200 bg-[#faf8f2] px-4 py-3 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-semibold text-slate-700">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+919390898250"
                className="mt-1 rounded-lg bg-[var(--brand-primary)] px-3 py-2 text-center text-white"
                onClick={() => setIsMobileOpen(false)}
              >
                Contact for Admission
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
