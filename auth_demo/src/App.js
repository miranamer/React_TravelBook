import { useEffect, useState } from "react";
import Card from "./components/Card";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Row2 from "./components/Row2";
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account"
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from "./components/ProtectedRoute";
import ViewMore from "./pages/ViewMore";


function App() {

  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path='view' element={<ViewMore />} />

        </Routes>
      </AuthContextProvider>

    </>
    
  );
}

export default App;
