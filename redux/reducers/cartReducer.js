let defaultState = {
    selectedItems: { items: [], restaurentName: '' }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurentName: action.payload.restaurentName,
            }

            console.log(newState, "👉🏻");
            return newState
        }
        default: return state;
    }
}

export default cartReducer