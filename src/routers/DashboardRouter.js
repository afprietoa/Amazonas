import React from 'react'
import { 
  Routes,
  Route,
  Navigate} 
  from 'react-router-dom';
import { Cart } from '../pages/Cart';
import { Sell } from '../pages/Sell';
import { Details } from '../pages/Details';
import { Home } from '../pages/Home';

import { Navbar1st } from '../components/Navbar1st';
import { Navbar2nd } from '../components/Navbar2nd';
import { Footer } from '../components/Footer';

import  Map  from '../pages/Map';

export const DashboardRouter = () => {
  return (
        
    <>

    <Navbar1st />
    <Navbar2nd />

        <Routes>

        <Route exact path="/*" element={<Navigate to="/home" />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="/map" element={<Map />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/sell" element={<Sell />}/>   
            
        </Routes>

        <Footer/>
    </>

);
}


