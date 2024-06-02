import React from 'react'
import CurveBling from '../svg/CurveBling'

const BackgroundVideoComponent = () => {
  return (
    <>
    <video className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2" autoPlay muted loop>
      <source src="/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <CurveBling/>
    </>
  )
}

export default BackgroundVideoComponent