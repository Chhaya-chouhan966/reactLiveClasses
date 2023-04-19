import './App.css';
import Home from './Componenets/Comp/Home';
import Nav from './Componenets/Comp/Nav';
// import InputBtn from './Component/Input'
import Input from './Componenets/ReduxComponenet/Input'
import { Routes, Route } from "react-router-dom"
import Product from './Componenets/Comp/Product';
import Technology from './Componenets/Comp/Technology';
import  Text from './Componenets/ReduxComponenet/Text'
function App() {
  return (
    <div className="App">
      {/* <InputBtn /> */}
      {/* <Input/> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/redux" element={<div>
            <Input />
            <br/>
            <Text />
          </div> } />

      </Routes>

    </div>
  );
}

export default App;
