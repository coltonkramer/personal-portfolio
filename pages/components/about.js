import React from 'react'
import { HomeNavigation } from '../HomeNavigation';
import Image from 'next/image'
import coltonAndRomy from '../assets/coltonAndRomy.jpg'

const coltonAndRomySrc = coltonAndRomy.src

const About = () => {
 
    return (
      <>
      {console.log(coltonAndRomySrc)}
      <div className='AboutPicture'>
      <Image alt="Colton and Romy in a car" src={coltonAndRomySrc} width={750} height={500}/>
      <div className='AboutContainer'>

      <h1>A Little Bit About Me</h1>
      
      <h4>I grew up in Charlotte, NC where I loved to play video games and  
          tinker with computers. It was not until I got to college when I 
          discovered my love for web development. I am currently a senior
          in my software engineering program at Brigham Young University 
          - Idaho and expecting to graduate in December 2022. Now I am 
          living in Charlotte again with my wife and our cat.</h4>
      </div>
      </div>
      <HomeNavigation/>
      </>
    )
  }

export default About