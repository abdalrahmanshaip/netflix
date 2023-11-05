"use client"
import Image from "next/image"


function Movieshow() {

  return (
    <div className="video">
        <video controls autoPlay muted width="640" height="360" className="video">
          <source src="./Coco - Theatrical Trailer.mp4" type="video/mp4" />
        </video>
    </div>
  )
}

export default Movieshow