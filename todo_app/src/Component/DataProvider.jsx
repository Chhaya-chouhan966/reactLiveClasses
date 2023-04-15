import React, { useContext,createContext, useState } from 'react'


const Context = createContext();
export const  StoringPoint= () => useContext(Context)


const DataProvider = ({ children }) => {

    const [state, setState] = useState("hello");

    return (
        <Context.Provider value={{state,setState}}>
            {children}
        </Context.Provider>
    );
}

export default DataProvider;