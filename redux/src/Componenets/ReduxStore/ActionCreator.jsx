import { product } from "./ActionType"
 export const CountIncrement= (products) =>{
    return{
        type:"count",
        count:products
    }
}

const ActionCreator = (data) => {
    return {
        type: product,
        payload: data
    }
}

export default ActionCreator

