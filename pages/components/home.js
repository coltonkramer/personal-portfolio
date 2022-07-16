import React from 'react'
import Image from 'next/image'
import colton from '../assets/colton.png'
import {HomeContainerStyle} from "./style.module.css" 

const coltonSrc = colton.src;

console.log('variable', coltonSrc)

const projects = [
  {
    src:{coltonSrc}
  },
]

console.log('object', projects[0].src.coltonSrc)

const HomeContainer = () => {
 
    return (
      <div className={HomeContainerStyle}>
      <Image
      alt="colton with car"
      src={projects[0].src.coltonSrc}
      width={500}
      height={500}
      />
      <div><h3>Hi there! My name is Colton Kramer and I am a front end developer 
        based out of Charlotte, NC. I am looking for opportunities to improve my 
        skills in frontend technology</h3></div>
      </div>
    )
  }

export default HomeContainer