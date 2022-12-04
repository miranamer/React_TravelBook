import React from 'react'
import {BsFillBookmarkFill} from 'react-icons/bs'

const NavBar = () => {
  return (
    <>
        <div className="font-poppins flex justify-between bg-white h-[100px] items-center text-black shadow-2xl">
            <div className="flex items-center justify-center gap-2">
                <h1 className=" ml-10 text-3xl font-bold hover:cursor-pointer">TravelBook</h1>
                <p className='text-2xl pt-1'><BsFillBookmarkFill /></p>
            </div>
            <div className="flex gap-10 text-3xl mr-10">
                <h1 className="hover:cursor-pointer">Login</h1>
                <h1 className="hover:cursor-pointer">Signup</h1>
            </div>
        </div>
    </>
  )
}

export default NavBar