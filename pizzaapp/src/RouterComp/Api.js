import { useState } from "react";


function API(){
    const [state,setState]=useState([])


    const url = 'https://pizzaallapala.p.rapidapi.com/productos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '768d6b335cmsh919d097e5789ba5p11a5e0jsnac841190b603',
            'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
        }
    };
    
    const getPizza=async()=>{
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            
            setState(result.productos)
            console.log(state);
           
        } 
        catch (error) {
            console.error(error);
        }

    }
    getPizza()
    return (
     <div>
        {
            state.map((ele)=>{
                
                return <h1>{ele.nombre}</h1>
            })
        }
     </div>
        
    )
        }
   


export default API