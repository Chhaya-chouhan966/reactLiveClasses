import React, { useContext } from 'react';
import './App.css';
import Home from './Components/ContextAPI-Login/Home';
import Login from './Components/ContextAPI-Login/Login';
import Nav from './Components/ContextAPI-Login/Nav';
import { myContext } from './Components/ContextAPI-Login/contex'
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './Components/ContextAPI-Login/Profile';
import Product from './Components/ContextAPI-Login/Product';
import Contactus from './Components/ContextAPI-Login/Contactus';
import ProductDetail from './Components/ContextAPI-Login/ProductDetail';
import PageNotFound from './Components/ContextAPI-Login/PageNotFound';
import Technology from './Components/ContextAPI-Login/Technology';
import Html from './Components/ContextAPI-Login/Technology/Html';
import Css from './Components/ContextAPI-Login/Technology/Css';
import Javascript from './Components/ContextAPI-Login/Technology/Javascript';
import AReact from './Components/ContextAPI-Login/Technology/AReact';
import Protect from './Components/ContextAPI-Login/Protect';


function App() {

  const { data } = useContext(myContext);
  
  return (
    <div className="App">
      {
        data ? (<><Nav />
          < Routes>
            <Route path='/' element={<Protect><Home /></Protect>} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contactus' element={ <Protect><Contactus /></Protect> } />
            <Route path='/productDetail/:id' element={<ProductDetail />} />
            <Route path='/technology' element={< Technology />}>
              <Route path='' element={< Navigate to="html" />} />
               
              <Route path='html' element={< Html />} />
              <Route path='css' element={< Css />} />
              <Route path='javascript' element={< Javascript />} />
              <Route path='react' element={< AReact />} />
               
            </Route>
            <Route path='*' element={< PageNotFound />} />
          </ Routes>
        </>
        ) : (
          <Login />
        )
      }


    </div>
  );
}

export default App;


