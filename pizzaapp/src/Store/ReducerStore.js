
 const initialData={
    dessert:[]
 }
const BasicReducer= (storedata=initialData, action) =>{
    if (action.type==="pizza") {
        return{
            // ...storedata,
            dessert:action.payload
        }
    }
   return storedata;
}

export default BasicReducer