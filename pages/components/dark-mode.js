import React from 'react'
import { useState, useEffect} from 'react'
import {DarkModeContainer, DarkModeStyle, ToggleButton, ExpDarkMode } from "./style.module.css"

const DarkMode = () => {

const activeTheme = localStorage.getItem('theme')

const [isDarkModeActive, setIsDarkModeActive] = useState(activeTheme ? true : false);

const handleDarkMode = () =>{
  document.body.classList.add(DarkModeStyle)
  document.getElementById('experience-container').classList.add(ExpDarkMode)
  setIsDarkModeActive(true)
  setTheme(true)
}

const handleLightMode = () =>{
  document.body.classList.remove(DarkModeStyle)
  document.getElementById('experience-container').classList.remove(ExpDarkMode)
  setIsDarkModeActive(false)
  setTheme(false)
}

const setTheme = (theme) => {
  if (activeTheme !== theme){
    localStorage.setItem('theme', theme)
  }
}

  console.log(isDarkModeActive)
  return (
      <div className={DarkModeContainer}>
        <div className={ToggleButton} onClick={isDarkModeActive ? handleLightMode : handleDarkMode }>
        {isDarkModeActive ? 'Click for Light Mode' : 'Click for Dark Mode' }
        </div>
      </div>
  )
}

export default DarkMode