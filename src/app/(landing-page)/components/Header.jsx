import Link from 'next/link';

import React from 'react'

export const Navbar = () => {
  return (
    <div className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212]/100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-2xl md:text-3xl text-white font-normal">
        WEB
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            <li key="about" className='hover:text-slate-200'><Link href="/about">About</Link></li>
            <li key="projects" className='hover:text-slate-200'><Link href="#projects">Projects</Link></li>
            <li key="blog" className='hover:text-slate-200'><Link href="#blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;