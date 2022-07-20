import React from "react";
import Image from "next/image";
import Link from "next/link";
import ReturnHome from "./return-home";
import { ContactContainer } from "./style.module.css";
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'



const Contact = () => {
  return (
    <>
      <ReturnHome />
      <div className={ContactContainer}>
        <h1>Contact Me</h1>
        <p>If you liked what you saw, hated it and want to give me feedback or just want to talk, hit me up. The best way to reach me is through email but you can also try me through social media listed below</p>
        <h3>Socials</h3>
        <Link href='https://github.com/coltonkramer'>
          <a>
        <Image
        src={github}
        alt={`Github chip`}
        width={50}
        height={50}
        />
          </a>
        </Link> 
        <Link href='https://www.linkedin.com/in/coltonkramer'>
          <a>
        <Image
        src={linkedin}
        alt={`LinkedIn chip`}
        width={50}
        height={50}
        />
          </a>
        </Link> 

      </div>
    </>
  );
};

export default Contact;
