import React from 'react'
import { useLocation } from 'react-router-dom'

const ViewMore = () => {
    const location = useLocation()
    const { city, country, img, info } = location.state
  return (
    <>
    
        <div className=" font-poppins relative h-[380px] bg-cover bg-center" style={{backgroundImage: `url(${img})`}}>
            <div className="w-full h-[380px] bg-black/60 absolute top-0 left-0 z-0">

            </div>
            <h1 className="text-white text-3xl font-bold absolute bottom-[40%] left-[20px] font-lato">{city}, {country}</h1>
            <h1 className='absolute bottom-4 text-white text-2xl left-4'>Learn More Below:</h1>
        </div>

        <div className=" border-2 border-black font-poppins p-3 m-2 rounded-md">
            <p className='text-xl'>{info}</p>
        </div>

    </>
  )
}

export default ViewMore