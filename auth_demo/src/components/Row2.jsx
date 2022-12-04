import React from 'react'
import Card from './Card';
import { useState, useEffect } from 'react';

const Row2 = ({apiURL, header}) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //setCountries(data);
        setCountries(data);
      })
      
  }, [])

  return (
    <>
        <div className="ml-5 pt-5 font-bold">
          <h1 className='text-2xl drop-shadow-lg font-poppins'>{header}</h1>
        </div>
        <div className="mt-10 flex gap-10 justify-center px-5">
          {countries && countries.map((item) => (
              <Card imageURL={item["img"]} key={item["country"]} country={item['country']} city={item['city']} />
          ))}
        </div>

    </>
  )
}

export default Row2