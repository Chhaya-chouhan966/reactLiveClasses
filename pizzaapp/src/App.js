import {  Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
import Home from './RouterComp/Home';
import Menu from './RouterComp/Menu';
import Event from './RouterComp/Event';
import OrderSuccess from './RouterComp/OrderSuccess';
import { useEffect, useState } from 'react';
import Order from './RouterComp/Order';
import QuickBtn from './RouterComp/QuickBtn';
import QuickOrderAddToCart from './RouterComp/QuickOrderAddToCart';
import OrderDone from './RouterComp/OrderDone';



function App() {

  const location = useLocation();
  const [showNavAndHome, setShowNavAndHome] = useState(true);


  useEffect(() => {
    if (location.pathname !== "/") {
      setShowNavAndHome(false);
    } else {
      setShowNavAndHome(true);
    }
  }, [location]);
  return (
    <div className="App">
      {
        showNavAndHome ?
          (
            <>
              <Nav />
              <Home />
            </>
          ) : (
            <Routes>
              <Route path='/menu' element={< Menu />} />
              <Route path='/event' element={<Event />} />
              <Route path="/order/:id" element={<Order />} />
              <Route path='/order sucecced' element={<OrderSuccess />} />
              <Route path="/quick/:id" element={<QuickBtn />} />
              <Route path="/addtocart" element={<QuickOrderAddToCart />} />
              <Route path="/orderDone" element={< OrderDone/>} />
           
             
            </Routes>
          )


      }


    </div>
  );
}

export default App;
