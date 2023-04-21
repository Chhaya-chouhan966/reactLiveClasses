var initailData = {
    name: "tani",
    product: [],
    value:0
}

const basicReducer = (storedata = initailData, action) => {

    if (action.type === "name") {
        return {
            ...storedata,
            name: action.username
        }
    } else if (action.type === "product") {
        return {
            ...storedata,
            product: action.payload
        }
    } else if (action.type === "count") {
        return {
            ...storedata,
            value: action.count
        }
    }
    return storedata;
}

export default basicReducer;