'use client'
import React, { useState } from 'react'
import './Login.css'
import Link from 'next/link'

function Login() {
  
  return (
    <div className='container text-white relative'>
      <div className="icon">
        <img src=".././Netflix-Symbol.png" alt="" />
      </div>
      <div className="title">Who's watching?</div>
      <div className="cards">
        <div className="card">
          <Link href="./netflix"><img src='./Netflix-avatar.png' alt='netflix' /></Link>
          Abdalrahman
        </div>
        <div className="card">
          <Link href="./netflix"><img src='./netflix-profile-pictures-5yup5hd2i60x7ew3.jpg' alt='netflix'/></Link>
          Ahmed
        </div>
        <div className="card">
        <Link href="./netflix" ><img src='./netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg' alt='netflix'/></Link>
          Mohamed
        </div>
        <div className="card">
        <Link href="./netflix" ><img src='./netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg' alt='netflix'/></Link>
          Ali
        </div>
      </div>
    </div>
  )
}

export default Login