import { useEffect, useState } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Row2 from "./components/Row2";


function App() {

  return (
    <>

      <NavBar />
      <Hero />
      
      <div className="">
        <div className=" h-[40px] text-2xl flex items-center justify-center">
          <h1 className="mt-10 drop-shadow-md font-poppins">Dream Destinations</h1>
        </div>

        <div className="pb-10">
          <Row2 apiURL="http://127.0.0.1:5000/" header="Popular" />
          <Row2 apiURL="http://127.0.0.1:5000/cold" header="Cold" />
        </div>
      </div>

    </>
    
  );
}

export default App;
