

const init = [];
const detailsReducer = (state=init,action) => {

    if(action.type === 'STORE_PRODUCT'){
        return [action.payload];
    }else{
        return state;
    }

}

export default detailsReducer;