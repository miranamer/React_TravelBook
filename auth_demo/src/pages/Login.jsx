import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  
  
  return (
    
    <>
      <div className="flex justify-center items-center h-screen bg-black bg-[url('https://cache.marriott.com/content/dam/marriott-renditions/BOBXR/bobxr-exterior-aerialview-1580-hor-wide.jpg?interpolation=progressive-bilinear&downsize=1440px:*')] bg-no-repeat bg-cover">
        <div className="w-[400px]  rounded-md h-[600px] mb-20 shadow-2xl bg-white bg-opacity-30 backdrop-blur-lg border-2 border-white border-opacity-40">
          <div className="flex items-center justify-center">
            <h1 className="text-white text-4xl mt-5 font-mont drop-shadow-md">Login</h1>
          </div>
          <div className="flex items-center justify-center flex-col mt-[60px]">
            {error ? <p className='p-3 bg-red-400 my-2 text-white text-lg font-bold rounded-md border-2 border-red-500 font-mont'>{error}</p> : null}
            <form onSubmit={handleSubmit} className='w-[300px] flex flex-col py-4 text-white'>
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" className="p-3 my-2 bg-gray-700 rounded " autoComplete="email" />
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password" className="p-3 my-2 bg-gray-700 rounded" autoComplete='current-password' />
              <button className='bg-green-600/70 border-2 border-green-600 text-green-700 text-xl font-poppins py-2 my-6 rounded font-bold'>
                Log In
              </button>
              <p className='py-8 font-bold'>
                <span className='text-gray-600'>Dont Have An Account?</span>{' '}
                <Link to='/signup'>Sign Up</Link>
              </p>
            </form>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
