import React from 'react'
import { useState, useEffect } from 'react'
import "./style.module.css"
import { setTheme } from '../helpers/helpers'



const DarkMode = () => {
  const [togClass, setTogClass] = useState('dark');
  let theme = localStorage.getItem('theme');

  const handleOnClick = () => {
      if (localStorage.getItem('theme') === 'theme-dark') {
          setTheme('theme-light');
          setTogClass('light')
      } else {
          setTheme('theme-dark');
          setTogClass('dark')
      }
  }

  useEffect(() => {
      if (localStorage.getItem('theme') === 'theme-dark') {
          setTogClass('dark')
      } else if (localStorage.getItem('theme') === 'theme-light') {
          setTogClass('light')
      }
  }, [theme])

  return (
      <div className="container--toggle">
          {
              togClass === "light" ?
              <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} checked />
              :
              <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={handleOnClick} />
          }
          <label htmlFor="toggle" className="toggle--label">
              <span className="toggle--label-background"></span>
          </label>
      </div>
  )
}

export default DarkMode