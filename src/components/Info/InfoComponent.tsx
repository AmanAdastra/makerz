import React from 'react'

const InfoComponent = () => {
  return (
    <div >
                <img src="https://nomadlist.com/assets/laurel.svg?7" className=" filter invert hue-rotate-90" width={200} height={400} />

                <div className="absolute top-[10px] left-[38px] flex flex-col justify-center font-light  text-white text-[12px]">
                  <span className="text-center"> #1 Nomad Community</span>
                  <div className="flex  justify-center gap-1 my-1">
                    <img src="https://nomadlist.com/assets/star.svg?3" className="filter invert hue-rotate-90" width={10} height={20} />
                    <img src="https://nomadlist.com/assets/star.svg?3" className="filter invert hue-rotate-90" width={10} height={20} />
                    <img src="https://nomadlist.com/assets/star.svg?3" className="filter invert hue-rotate-90" width={10} height={20} />
                    <img src="https://nomadlist.com/assets/star.svg?3" className="filter invert hue-rotate-90" width={10} height={20} />
                    <img src="https://nomadlist.com/assets/star.svg?3" className="filter invert hue-rotate-90" width={10} height={20} />
                  </div>
                  <span className="text-center"> Since 2014</span>
                </div>

                <h1 className="text-[56px] mt-[20px] text-white font-bold w-[730px] leading-none">Go nomad and work remotely around the world</h1>
                <p className="text-white mt-[20px] text-[21px] mb-[14px] font-medium w-[700px]">
                  Join the #1 global community of 33,679 remote workers living and traveling around the world since 2014
                </p>
                <div className="flex relative">
                  <div className="relative " >
                    <img alt="Nomad List member" width="40" src="https://nomadlist.com/assets/img/users/775858cb52bf06d463717dc37898575a.jpg?1666720009" height="40" className="rounded-full border-white border-2 h-[40px] w-[40px]" />
                  </div>
                  <div className="relative -left-1" >
                    <img alt="Nomad List member" width="40" src="https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1666719817" height="40" className="rounded-full border-white border-2 h-[40px] w-[40px]" />
                  </div>

                  <div className="relative -left-4" >
                    <img alt="Nomad List member" width="40" src="https://nomadlist.com/assets/img/users/2758342da737041f0e8adffa925789f5.jpg?1666718721" height="40" className="rounded-full border-white border-2 h-[40px] w-[40px]" />
                  </div>
                  <div className="relative  -left-5 " >
                    <img alt="Nomad List member" width="40" src="https://nomadlist.com/assets/img/users/92b13bde13f6ab1acc871d86a5cb9d06.jpg?1666717610" height="40" className="rounded-full border-white border-2 h-[40px] w-[40px]" />
                  </div>
                  <div className="relative -left-6" >
                    <img alt="Nomad List member" width="40" src="https://nomadlist.com/assets/img/users/b9355c2757c6b4741b0f4def87d8a588.jpg?1666719817" height="40" className="rounded-full border-white border-2 h-[40px] w-[40px]" />
                  </div>
                </div>

                <div>


                  <div className="text-white text-[21px] pt-[14px] mt-[10px] font-medium">
                    🍹 <span className="underline">Attend 390 meetups/year</span> in 100+ cities
                  </div>
                  <div className="text-white text-[21px] pt-[14px]  font-medium">
                    ❤️ <span className="underline" >Meet new people</span> for dating or making friends
                  </div>
                  <div className="text-white text-[21px] pt-[14px]  font-medium">
                    🧪 <span className="underline" >Research destinations</span> and find your best place to live
                  </div>
                  <div className="text-white text-[21px] pt-[14px]  font-medium">
                    🌎 <span className="underline" >Keep track of your travels</span> and record where you've been
                  </div>
                  <div className="text-white text-[21px] pt-[14px]  font-medium">
                    💬 <span className="underline" >Join Nomad List chat</span> and find your community on the road
                  </div>
                </div>
              </div>
  )
}

export default InfoComponent