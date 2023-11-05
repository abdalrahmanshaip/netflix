import Moviecard from '@/components/Moviecard'
import Movieshow from '@/components/Movieshow'
import Navbar from '@/components/Navbar'
import React from 'react'

function page() {
  return (
    <main>
      <Navbar />
      <Movieshow />
      <Moviecard />
    </main>
  )
}

export default page