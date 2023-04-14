import { createContext, useState } from "react";


export const context = createContext()

const DataProvider = ({children}) => {

    const [data, setData]=useState(0)
   
    return (
        < context.Provider value={{data, setData}}>
            {children}
        </context.Provider>
    );
}

export default DataProvider;
