import React from 'react'

const WinBadgeComponent = () => {
    return (
        <div className=' flex justify-center md:justify-start  '>
            <div className='relative'>
                <img src="https://nomadlist.com/assets/laurel.svg?7" className=" filter invert hue-rotate-90" width={200} height={400} />

                <div className="absolute top-[10px] left-[40px] flex flex-col justify-center font-light  text-white text-[12px]">
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
            </div>
        </div>
    )
}

export default WinBadgeComponent