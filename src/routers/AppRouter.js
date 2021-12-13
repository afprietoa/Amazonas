import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, 
  Routes,
  Route} 
  from 'react-router-dom';
  import { getAuth,onAuthStateChanged } from "@firebase/auth";
import {PublicRouter} from './PublicRouter'
import {PrivateRouter} from './PrivateRouter'
import { Login } from '../pages/Login';

import { SignUp } from '../pages/SignUp';
import { DashboardRouter } from './DashboardRouter';


export const AppRouter = () => {
  
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)



useEffect(() => {
     const auth = getAuth();
     onAuthStateChanged(auth, (user) => {
         if(user?.uid){
          //console.log(user)
           
          setIsLoggedIn(true)
         }
         else{
          setIsLoggedIn(false)
         }

         setChecking(false)
     })

  
}, [setChecking, setIsLoggedIn])


  if(checking){
      return(
          <h1>Espere...</h1>
      )
  }
  return (
        
    <Router>



        <Routes>



        <Route path="/login" element={
                    <PublicRouter isAuthenticated={isLoggedIn}>
                        <Login/> 
                    </PublicRouter>
                } />



                <Route path="/signup" element={
                    <PublicRouter isAuthenticated={isLoggedIn}>
                        <SignUp/>
                    </PublicRouter>
                } />

                
                <Route path="/*" element={
                    <PrivateRouter isAuthenticated={isLoggedIn}>
                        <DashboardRouter/>
                    </PrivateRouter>
                }/>
            
        </Routes>

        
    </Router>

);
}


