// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

/* eslint-disable no-unused-vars */
import React from "react"

import Testimonialcard from './TestimonialCard'

function App() {
  return (
    <div >
      <h1>ClientTestimonials</h1>
      <div>
        <Testimonialcard
        name ="jhon"
        review="good"/>
        <Testimonialcard
        name="Bruce"
        review="The service was amazing"/>
      </div>
    </div>

  )
}

export default App
