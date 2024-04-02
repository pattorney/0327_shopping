const getProductDetail = (id) => {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/pattorney/0327_shopping/products/${id}`;
//        let url = `http://localhost:5000/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch ({type: "GET_PRODUCT_DETAIL_SUCCESS", plyload: { data }});
    }
}

export const productDetailAction = { getProductDetail };