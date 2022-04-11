let defaultState = {
    selectedItems: { items: [], restaurentName: '' }
}

let cartReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            let newState = { ...state };
            if (action.payload.checkBoxValue) {
                console.log('ADD TO CART');

                newState.selectedItems = {
                    items: [...newState.selectedItems.items, action.payload],
                    restaurentName: action.payload.restaurentName,
                };
            } else {
                console.log("REMOVE FROM CARD");
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title)
                    ],
                    restaurentName: action.payload.restaurentName
                }
            }

            // console.log(newState, "👉🏻");
            return newState
        }

        default: return state;
    }
}

export default cartReducer