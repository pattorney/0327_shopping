let initialState = {
    id: "",
};

function productDetailReducer (state=initialState, action) {
    let {type, payload} = action;
    switch (type) {
        case "GET_PRODUCT_DETAIL_SUCCESS":
            return { ...state, id: payload.id };
        default:
            return { ...state };
    }
}

export default productDetailReducer;