function getProducts (searchQurey) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/pattorney/0327_shopping0327/products/?q=${searchQurey}`;
//        let url = `http://localhost:5000/products?q=${searchQurey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        dispatch({type: "GET_PRODUCT_SUCCESS", payload: {data}});
//        setProductList(data);
    };
};

export const productAction = { getProducts };