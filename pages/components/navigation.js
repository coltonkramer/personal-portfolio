import React from "react";
import Link from 'next/link'
import { NavContainer, GlobalNav, ContactContainer} from "./style.module.css"




const Navigation = () => {

            return(
                <>
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
            </div>
                </>
            )
    }
    export default Navigation