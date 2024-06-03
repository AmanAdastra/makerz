import React from 'react'
import WinBadgeComponent from './WinBadgeComponent'
import PeoplesComponent from './PeoplesComponent'
import LinksComponent from './LinksComponent'

const InfoComponent = () => {
  return (
    <div className='px-4 text-wrap flex-1 z-50'>
      <WinBadgeComponent />
      <h1 className="text-[36px] lg:text-[56px] mt-[20px] text-white font-bold leading-none">Go nomad and work remotely around the world</h1>
      <p className="text-white text-[21px] my-4 font-medium ">
        Join the #1 global community of 33,679 remote workers living and traveling around the world since 2014
      </p>
      <PeoplesComponent/>
      <LinksComponent/>
      
    </div>
  )
}

export default InfoComponent