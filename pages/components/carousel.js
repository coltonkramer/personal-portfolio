import React from "react";
import { useState } from "react";
import Image from 'next/image'
import { carousel, navArrows, heroImage, carouselDescription, carouselNavigation } from "./style.module.css";
import projects from "../assets/projectsData"



// Create the carousel component
const Carousel = () => {
  // Use a use state to keep track of which image is being displayed
  // Defaults to 0 images i.e. the first image in the array
  const [currentImage, setCurrentImage] = useState(0);
  console.log(projects)


  return (
    // Returns the div holding the carousel component
    <div className={carousel}>
      {/* Creates an image tag that holds all the attribute of the image */}
      <Image
        className={heroImage}
        src={projects[currentImage].img}
        alt={projects[currentImage].subtitle}
        title={projects[currentImage].title}
        width={1000}
        height={750}
      ></Image>
        <div className={carouselNavigation}>
          <div className={carouselDescription}>
          <p>{projects[currentImage].subtitle}</p>
          </div>
      {/* Container for the arrows to control the carousel */}
      <div className={navArrows}>
        <button
          aria-label="Carousel Scroll Previous"
          className="leftArrowContainer"
          tabIndex={0}
          onKeyDown={this}
          onClick={() => {
            setCurrentImage(() => {
              // When we click the button if the carousel usestate is already at 0 we set it to the last item in the array
              if (currentImage === 0) {
                return projects.length - 1;
              } else {
                // Otherwise we subtract 1 from the currentImage
                return currentImage - 1;
              }
            });
          }}
        >
          {/* Uses the svg from the rivian site for the left and right arrows */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20L4 12L12 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <line
              x1="5"
              y1="12"
              x2="21"
              y2="12"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></line>
          </svg>
        </button>
        <div>
          <span>{projects[currentImage].value}</span>/4
        </div>
        {/* The button for the right arrow in the carousel */}
        <button
          aria-label="Carousel Scroll Next"
          className="rightArrowContainer"
          tabIndex={0}
          onKeyDown={this}
          onClick={() => {
            setCurrentImage(() => {
              if (currentImage === projects.length - 1) {
                return 0;
              } else {
                return currentImage + 1;
              }
            });
          }}
        >
          {/* right arrow svg */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 20L20 12L12 4"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <line
              x1="1"
              y1="-1"
              x2="17"
              y2="-1"
              transform="matrix(-1 0 0 1 20 13)"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></line>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
};
// exports the carousel component imported in navigation.js 
export default Carousel;
