import React from 'react'
import Image from 'next/image'
import colton from '../assets/colton.png'
import {HomeContainerStyle, SubtitleContainer, HeroImage, HeroImage2, HeroImage3} from "./style.module.css" 

const coltonSrc = colton.src;


const HomeContainer = () => {
 
    return (
      <div className={HomeContainerStyle}>
        <div className={HeroImage3}>
        <div className={HeroImage2}>
        <div className={HeroImage}>
        <Image
        alt="colton with car"
        src={coltonSrc}
        width={500}
        height={500}
        />
        </div>
        </div>
        </div>
        <div className={SubtitleContainer}>
          <p><span><h2>Hi there!</h2></span> My name is Colton Kramer and I am a front end developer 
          based out of Charlotte, NC. I am looking for opportunities to improve my skills and become a better engineer</p>
        </div>
      </div>
    )
  }

export default HomeContainer