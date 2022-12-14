import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {

  const [country, setCountry] = useState([]);
  const [test, setTest] = useState('');
  const [test2, setTest2] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        //setCountries(data);
        //console.log(data[0]['img']);
        const rand = Math.floor(Math.random()*data.length)
        setCountry(data[rand]['img'])
        setTest(data[rand]['city'])
        setTest2(data[rand]['country'])
        setInfo(data[rand]['info'])
      })
      
  }, [])

  //let country_img = country[0]['img']

  return (
    <>

        <div className=" font-poppins relative h-[380px] bg-cover bg-center" style={{backgroundImage: `url(${country})`}}>
            <div className="w-full h-[380px] bg-black/60 absolute top-0 left-0 z-0">

            </div>
            <h1 className="text-white text-3xl font-bold absolute bottom-[40%] left-[20px] font-lato">{test}, {test2}</h1>
            <button className="border-2 border-white z-100 w-[120px] h-[40px] absolute bottom-4 text-white text-xl left-4">Save</button>
            <Link to='/view' state={{ city: test, country: test2, img: country, info: info }}>
            <button className="bg-white z-100 w-[120px] border-2 h-[40px] absolute bottom-4 text-gray-400 text-xl left-[160px]">View</button>
            </Link>
        </div>

    </>
  )
}

export default Hero