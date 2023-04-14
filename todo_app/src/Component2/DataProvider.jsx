import React, { createContext, useContext, useState } from 'react'

export const context = createContext();
// const useContext = () => useContext(context)

const DataProvider = ({ children }) => {

    const [state, setState] = useState();

    return (
        <context.Provider value={state}>
            {children}
        </context.Provider>
    );
}

export default DataProvider;