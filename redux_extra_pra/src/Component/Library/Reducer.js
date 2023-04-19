
const initialData = {
   name:" 0"
}

const basicReducer = (storData = initialData, action) => {
   if (action.type === "num") {
      return {
         name: action.count 
      }
   } 
     
   return storData;
}

export default basicReducer;
