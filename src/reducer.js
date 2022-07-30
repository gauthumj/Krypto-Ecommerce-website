export const initialState = {
    basket: [],
    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

function reducer(state, action) {
    // console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case "ADD_TO_BASKET":
            // logic for adding to basket
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            // logic for removing
            let newBasket = [...state.basket]; //cloning basket
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id // getting index of item to be deleted
            );

            if (index >= 0) {
                newBasket.splice(index, 1); //remove 1 element after "index"
            } else {
                console.warn(`${action.id} does not exist `);
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
}

export default reducer;
