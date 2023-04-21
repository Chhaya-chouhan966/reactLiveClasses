 const initialState={
    myName:"kajl"
 }
 
 const basicReducer= (storeData=initialState, action) =>{
     if (action.type ==="name") {
         return{
             myName:action.userName
            }
        }
    return storeData;
 }

 export default basicReducer;