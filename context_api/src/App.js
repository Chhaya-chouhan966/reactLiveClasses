import { useContext } from 'react';
import './App.css';
import Home from './Components/ContextAPI-Login/Home';
import Login from './Components/ContextAPI-Login/Login';
import Nav from './Components/ContextAPI-Login/Nav';
// import A from './Components/ContextAPI_4/A';
// import A from './Components/ContextAPI-3/A';
import { myContext } from './Components/ContextAPI-Login/contex'

function App() {
  const { data } = useContext(myContext);
  return (
    <div className="App">
      {
        data ? (
          <>
            <Nav />
            <Home />
          </>
        ) : (
          <Login />
        )}

    </div>
  );
}

export default App;
