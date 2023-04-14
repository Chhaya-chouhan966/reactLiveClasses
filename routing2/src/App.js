import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './DesignCom/Nav';
import Home from './DesignCom/Home';
import Product from './DesignCom/Product';
import Contact from './DesignCom/Contact';
import AddtoCart from './DesignCom/AddtoCart';
import React from 'react';
// import { context } from './DesignCom/Contex';

function App() {
//  const {data}=useContext(context)
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/addtocart/:id' element={<AddtoCart />} />
      </Routes>

    </div>
  );
}

export default App;
