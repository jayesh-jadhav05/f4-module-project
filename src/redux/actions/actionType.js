

export const fetchProductRequest = () => {
    return(
        {
            type: 'FETCH_PRODUCT_REQUEST'
        }
    )
}

export const fetchProductSuccess = (products) => {
    return(
        {
            type: 'FETCH_PRODUCT_SUCCESS',
            payload: products
        }
    )
}

export const fetchProductFailure = (error) => {
    return(
        {
            type: 'FETCH_PRODUCT_FAILURE',
            payload: error
        }
    )
}

export const fetchProducts = () => {
    return async (dispatch) => {
         dispatch(fetchProductRequest())
         try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            dispatch(fetchProductSuccess(data))
         } catch (error) {
            dispatch(fetchProductFailure(error))
         }
    }
}