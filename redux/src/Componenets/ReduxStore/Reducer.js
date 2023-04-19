var initailData = {
    name: "tani"
}

const basicReducer = (storedata = initailData, action) => {

    if (action.type === "name") {
        return {
            ...storedata,
            name: action.username

        }
    }
    return storedata;
}

export default basicReducer;