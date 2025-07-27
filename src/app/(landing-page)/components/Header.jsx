import Link from 'next/link';

import React from 'react'
import { UilLinkedinAlt ,UilGithubAlt} from '@iconscout/react-unicons'
export const Navbar = () => {
  return (
    <div className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-black/90">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-xl md:text-2xl text-white font-normal">
        GEORGE WEBSITE
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {/* <li key="about" className='hover:text-slate-200'><Link href="/about">About</Link></li> */}
            <li key="projects" className="hover:border-b-2 hover:border-gray-500 transition duration-300"><Link href="#projects">Projects</Link></li>
            <li key="blog" className="hover:border-b-2 hover:border-gray-500 transition duration-300"><Link href="#blog">Blog</Link></li>
            <li key="linkedin" className="hover:border-b-2 hover:border-gray-500 transition duration-300 flex items-center">
              <Link href="https://www.linkedin.com/in/youquantan313" target="_blank" rel="noopener noreferrer">
                <UilLinkedinAlt className="text-white w-4 h-4 hover:border-b-2 hover:border-gray-500 transition duration-300" />
              </Link>
            </li>
            <li key="github" className="hover:text-slate-200 flex items-center">
              <Link href="https://github.com/GeorgTYQ" target="_blank" rel="noopener noreferrer">
                  <UilGithubAlt className="text-white w-4 h-4 hover:border-b-2 hover:border-gray-500 transition duration-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;