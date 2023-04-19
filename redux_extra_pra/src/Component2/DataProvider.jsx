import { createContext,  useState } from "react";

export const myContext = createContext();

// export const Store = () =>{ useContext(myContext)}
// console.log(Store ,"hello");


const DataProvider = ({ children }) => {
    const [state, setState]=useState(0);
    return (
        < myContext.Provider value={{state,setState}}>
            {children}
        </ myContext.Provider>
    )
}

export default DataProvider