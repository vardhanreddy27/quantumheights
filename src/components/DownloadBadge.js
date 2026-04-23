import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import Image from 'next/image';

function DownloadBadge() {
  return (
    <div id="contact" className="mt-5 flex flex-col gap-6 bg-[#123d6d] px-4 py-8 text-white md:flex-row">
      <div className="md:w-3/5">
        <div className="rounded-2xl bg-white p-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" height={48} width={48} alt="EduAdapt logo" className="h-12 w-12 rounded-full object-cover" />
            <h1 className='font-bold text-[#8c1d2c]'>EDUADAPT</h1>
          </div>
          <p className='mt-3 text-slate-700'>
            Download EDUADAPT for access to world-class online courses from prestigious institutions and industry leaders.
          </p>
          <div className='mt-4 grid gap-3 sm:grid-cols-2'>
            <Image src="/play.png" height={100} width={430} alt="Google Play badge" className="h-auto w-full object-contain" />
            <Image src="/app.png" height={112} width={435} alt="App Store badge" className="h-auto w-full object-contain" />
          </div>
        </div>
      </div>
      <div className="md:w-1/5">
        <div className="mb-4 font-semibold text-[#d4a11f]">Quick Links</div>
        <div>About</div>
        <div>Features</div>
        <div>Contact</div>
      </div>
      <div className="md:w-1/5">
        <div className="mb-4 font-semibold text-[#d4a11f]">Follow Us</div>
        <div>
          <FaInstagram className="inline-block" />
          <FaLinkedin className="inline-block ml-5" />
          <FaFacebookSquare className="inline-block ml-5" />
        </div>
      </div>
    </div>
  )
}

export default DownloadBadge
