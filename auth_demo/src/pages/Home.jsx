import React from 'react'
import Hero from '../components/Hero'
import Card from '../components/Card'
import Row2 from '../components/Row2'

const Home = () => {
  return (
    <>

      <Hero />
      
      <div className="">
        <div className=" h-[40px] text-2xl flex items-center justify-center">
          <h1 className="mt-10 drop-shadow-md font-poppins">Dream Destinations</h1>
        </div>

        <div className="pb-10">
          <Row2 apiURL="http://127.0.0.1:5000/" header="Popular" />
          <Row2 apiURL="http://127.0.0.1:5000/cold" header="Cold" />
          <Row2 apiURL="http://127.0.0.1:5000/hot" header="Hot" />
        </div>
      </div>

    </>
  )
}

export default Home