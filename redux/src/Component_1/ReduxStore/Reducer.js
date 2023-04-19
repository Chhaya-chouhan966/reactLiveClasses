 const initialState={
    myName:"tani"
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