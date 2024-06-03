import React from 'react'

const LinksComponent = () => {
  return (
    <div className='flex flex-col'>
      <p className="text-white text-[21px] pt-[14px] mt-[10px] font-normal">
        🍹<span className="underline text-nowrap">Attend 390 meetups/year</span>&nbsp; in 100+ cities.
      </p>
      <p className="text-white text-[21px] pt-[14px]  font-normal">
        ❤️<span className="underline text-nowrap" >Meet new people</span>&nbsp; for dating or making friends.
      </p>
      <p className="text-white hidden md:block text-[21px] pt-[14px]  font-normal">
        🧪<span className="underline text-nowrap" >Research destinations</span>&nbsp; and find your best place to live.
      </p>
      <p className="text-white hidden md:block text-[21px] pt-[14px]  font-normal">
        🌎<span className="underline text-nowrap" >Keep track of your travels</span>&nbsp;  and record where you've been.
      </p>
      <p className="text-white hidden md:block text-[21px] pt-[14px] justify-start  font-normal">
        💬<span className="underline text-nowrap" >Join Nomad List chat</span>&nbsp; and find your community on the road.
      </p>
    </div>
  )
}

export default LinksComponent