import React from 'react'
import Image from 'next/image'
import { ExperienceContainer, ExperienceBodyContainer, ExpSchool, ExpWork, ExpTech, ExpImage } from "./style.module.css";
import laptop from '../assets/pexels-junior-teixeira-2047905.jpg'


const Experience = () => {

    return (
    <>
      <div className={ExperienceContainer} id="experience-container">
      <div><h2>Experience</h2></div>
      <div className={ExperienceBodyContainer}>
        <div className={ExpSchool}>
          <h3>School</h3>
          <p>Graduating for Brigham Young University - Idaho in December 2022 with a Bachelors of Science: Software Engineering and a Certificate in Web Development</p>
        </div>
        <div className={ExpWork}>
          <h3>Work</h3>
          <p>Intern for Rivian Automotive as a Software Engineering Intern with the Engagement Team.</p>
        </div>
        <div className={ExpTech}>
          <h3>Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Python</li>
            <li>Git</li>
          </ul>
        </div>
        <div  >
        <div  >
        <div  >
      <Image
      className={ExpImage}
      src={laptop}
      alt='A laptop in a dark room'
      width="700px"
      height="700px"
      objectFit="cover"
      />
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
    )
  }

export default Experience