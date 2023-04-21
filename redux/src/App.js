import './App.css';
import Home from './Componenets/Comp/Home';
import Nav from './Componenets/Comp/Nav';
// import InputBtn from './Component/Input'
import Input from './Componenets/ReduxComponenet/Input'
import { Routes, Route, Navigate } from "react-router-dom"
import Product from './Componenets/Comp/Product';
import Text from './Componenets/ReduxComponenet/Text'
import Cart from './Componenets/Comp/Cart';
import { useSelector } from 'react-redux';
function App() {

  const { value } = useSelector((valueData) => {
    return valueData;
  })
  return (
    <div className="App">
      {/* <InputBtn /> */}
      {/* <Input/> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/redux" element={<div>
          <Input />
          <br />
          <Text />
        </div>} />
        <Route path="/cart/:id" element={value===0 ? (<><Navigate to="/cart" /><h1 style={{ color: "red", margin: "150px",textAlign:"center" }}>Data Not Found</h1> </>):<Cart />} />

      </Routes>

    </div>
  );
}

export default App;
