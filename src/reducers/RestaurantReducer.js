
const initialState = {
    restaurants: [],
    selectedRestaurant: null
}

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_RESTAURANT_LIST":
            //console.log(action.restaurants)
            return {
                ...state,
                restaurants: action.restaurants,
                selectedRestaurant: null
            }
        case "SELECT_RESTAURANT":
            return {
                ...state,
                selectedRestaurant: action.restaurant
            }
        default:
            return state;
    }
}

export default restaurantReducer;