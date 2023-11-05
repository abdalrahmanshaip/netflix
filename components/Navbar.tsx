'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import './Navbar.css'
import { AiOutlineBell , AiOutlineMenu} from 'react-icons/ai';

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const menutoggle = () => {
    setIsOpen((open) => !open)
  }
  return (
    <>
    <div className="navbar flex">
      <div className="leftsec  flex justify-center items-center">
        <div className="trigger text-white ml-8 " onClick={menutoggle}>
          <AiOutlineMenu />
        </div>
        <div className="logo">
          <Image src='/05cItXL96l4LE9n02WfDR0h-5.webp' alt='logo' width={300} height={300}/>
        </div>
        <ul  className={`links text-white flex flex-wrap ${isOpen ? "is-open" : ""}`}>
          <Link href="/"><li>Home</li></Link>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li className='last'>My List</li>
        </ul>
      </div>
        <div className="rightsec flex justify-center items-center ml-auto pr-10">
          <AiOutlineBell size={50} className="text-white pr-4"/>
          <div className="user">
            <img src="/Netflix-avatar.png" alt="profile" width={50}   className='rounded-full'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Navbar