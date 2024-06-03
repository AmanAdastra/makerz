import React from 'react'
import CurveBling from '../svg/CurveBling'

const BackgroundVideoComponent = () => {
  return (
    <>
    <video className="absolute h-screen top-0 left-0 object-cover w-screen" autoPlay muted loop>
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <CurveBling/>
    </>
  )
}

export default BackgroundVideoComponent