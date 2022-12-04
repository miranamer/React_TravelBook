import React from 'react'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <div className="font-poppins flex justify-between bg-white h-[100px] items-center text-black drop-shadow-xl">
            <div className="flex items-center justify-center gap-2">
              <Link to='/'>
                <h1 className=" ml-10 text-3xl font-bold hover:cursor-pointer">TravelBook</h1>
                </Link>
                <p className='text-2xl pt-1'><BsFillBookmarkFill /></p>
            </div>
            {user?.email ?  <div className="flex gap-10 text-3xl mr-10">
              <Link to='/account'>
                <h1 className="hover:cursor-pointer">Account</h1>
              </Link>
                <h1 onClick={handleLogout} className="hover:cursor-pointer">Sign Out</h1>
            </div> : <div className="flex gap-10 text-3xl mr-10">
              <Link to='/login'>
                <h1 className="hover:cursor-pointer">Login</h1>
              </Link>
              <Link to='/signup'>
                <h1 className="hover:cursor-pointer">Signup</h1>
              </Link>
            </div>}
        </div>
    </>
  )
}



export default NavBar