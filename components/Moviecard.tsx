'use client'
import React, { useEffect, useState } from 'react'
import './Moviescard.css'
import { Api } from '@/types'
import Movieshow from './Movieshow'




function Moviecard() {
  const [animation, setAnimation] = useState<Api[]>([])
  const animationmovie = () => {
    const url = `https://api.sampleapis.com/movies/animation`
    fetch(url)
    .then((repsponse) =>  repsponse.json())
    .then((animation: Api[]) => setAnimation(animation))
  }
  // classic
  const [classic, setClassic] = useState<Api[]>([])
  const classicmovie = () => {
    const url = `https://api.sampleapis.com/movies/classic`
    fetch(url)
    .then((repsponse) => repsponse.json())
    .then((classic: Api[]) => setClassic(classic))
  }
  useEffect(() => {
    animationmovie();
    classicmovie();
  }, [])
  const sliceAnimation = animation.slice(1, 9);
  const sliceClassic = classic.slice(4, 12);

  return (
    <>
    {/*  animation */}
    <div className="title text-white mb-6 ml-10 text-2xl pt-4">Animation Movies</div>
    <div className="boxs flex flex-wrap ">
      <div className="card flex flex-wrap  gap-6 ml-10  mb-8">
        {sliceAnimation.map((anima) => {
          return (
            <div key={anima.id}>
            <img src={anima.posterURL} alt=""  width={200} onClick={() => console.log(anima.title)}/>
            </div>
          )
        })}
      </div>
    </div>
    {/*  classic */}
    <div className="title text-white mb-6 ml-10 text-2xl pt-4">Classic Movies</div>
    <div className="boxs flex flex-wrap ">
      <div className="card flex flex-wrap  gap-6 ml-10 ">
        {sliceClassic.map((cls) => {
          return (
            <div key={cls.id}>
            <img src={cls.posterURL} alt="photo" width={200}/>
            </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default Moviecard