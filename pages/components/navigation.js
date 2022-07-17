import React from "react";
import Link from 'next/link'
import DarkMode from "./dark-mode";
import { NavContainer, GlobalNav, ContactContainer, GlobalNavStyle} from "./style.module.css"




const Navigation = () => {

            return(
                <div className={GlobalNavStyle}>
            <div className={GlobalNav}>
                <div className={NavContainer}>
                    <div>
                        <Link href="#experience-container">
                        <a>Experience</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="./components/projects">
                        <a>Projects</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="./components/contact">
                        <a>Contact</a>
                        </Link>
                    </div>
                </div>
                <div className={ContactContainer}>
                    <p>Colton Kramer</p>
                    <p>colton.kramer1@gmail.com</p>
                    <p>803-445-9445</p>
                </div>
                {typeof window !== 'undefined' && 
                <DarkMode/>
                }
            </div>
                </div>
            )
    }
    export default Navigation