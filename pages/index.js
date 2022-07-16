import React from "react"
import { render } from "react-dom"
import HomeContainer from "./components/home"
import  Navigation  from "./components/navigation"
import Experience from "./components/experience"


class Home extends React.Component {
  render(){
    return(
      <>
      <Navigation/>
      <HomeContainer/>
      <Experience/>
      </>
    )
  }
}

export default Home



