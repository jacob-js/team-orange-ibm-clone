import React from 'react'

function Hero() {
  return (
    <div className='hero bg-secondary h-[1024px] w-full flex flex-col'>
        <div className="flex flex-col">
            <div className="flex">
                <div className="w-2/4 flex flex-col pt-32">
                    <div className="pr-16 text-[80px] leading-[92px]">
                        <div className="text-white">Experience</div>
                        <div className="text-primary ml-[85px]">matters</div>
                    </div>
                    <div className="text-white text-2xl font-extralight mt-14">
                    We are IBM iX, the experience agency of IBM Consulting. A new kind of agency, accelerated by a century of human-centred tech expertise.
                    </div>
                </div>
                <div className="w-2/4">
                    <img src="/app/hero-pat.svg" alt="" className='max-w-full hero__pat' />
                </div>
            </div>
            <div className="hero__img mt-44">
                <img src="https://ibmix.de/wp-content/uploads/2022/02/Thumbnail_iX-film.jpg" alt="" />
                <div className="text-xs text-right mr-20 mt-1">We put the interaction between people and technology at the center of everything we do.</div>
            </div>
        </div>
    </div>
  )
}

export default Hero