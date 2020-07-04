import { rootServerUrl } from "../constants/constants"

export const addFavoritedRestaurant = (username, restaurantId, restaurantName) => {
    
    return fetch(`${rootServerUrl}/favorites`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            restaurantId: restaurantId,
            restaurantName: restaurantName
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
}

export const removeFavoritedRestaurant = (username, restaurantId) => {
    return fetch(`${rootServerUrl}/favorites/${username}/${restaurantId}`, {
        method: 'DELETE',
        body: JSON.stringify({
            username: username,
            restaurantId: restaurantId
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
}

export const getFavoriteRestaurants = (username) => {
    return fetch(`${rootServerUrl}/favorites/${username}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
}
