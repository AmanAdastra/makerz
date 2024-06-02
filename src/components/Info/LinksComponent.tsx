import React from 'react'

const LinksComponent = () => {
  return (
    <div>
      <div className="text-white text-[21px] pt-[14px] mt-[10px] font-normal">
        🍹 <span className="underline">Attend 390 meetups/year</span>&nbsp;in 100+ cities
      </div>
      <div className="text-white text-[21px] pt-[14px]  font-normal">
        ❤️ <span className="underline" >Meet new people</span>&nbsp;for dating or making friends
      </div>
      <div className="text-white hidden md:flex text-[21px] pt-[14px]  font-normal">
        🧪 <span className="underline" >Research destinations</span>&nbsp;and find your best place to live
      </div>
      <div className="text-white hidden md:flex text-[21px] pt-[14px]  font-normal">
        🌎 <span className="underline" >Keep track of your travels</span>&nbsp;and record where you've been
      </div>
      <div className="text-white hidden md:flex text-[21px] pt-[14px]  font-normal">
        💬 <span className="underline" >Join Nomad List chat</span>&nbsp;and find your community on the road
      </div>
    </div>
  )
}

export default LinksComponent