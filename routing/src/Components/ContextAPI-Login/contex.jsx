import { createContext, useState } from "react";

export const myContext = createContext();

function CustomProvider({ children }) {

   const [data, setData] = useState(false);
   return (
      <myContext.Provider value={{ data, setData }}>
         {children}

      </myContext.Provider>
   );
}

export default CustomProvider;