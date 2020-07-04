
import { rootServerUrl } from "../constants/constants"



export const loginUser = (username, password) => {
    return fetch(`${rootServerUrl}/login`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
            isAdmin: false
        }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: "include"
    })
    .then(response => response.json())
}

export const isUsernameAvailable = (username) => {
    return fetch(`${rootServerUrl}/users/${username}`)
                .then(response => response.json())
}

export const registerUser = (username, password) => {
    return fetch(`${rootServerUrl}/users`, {
        method: 'POST',
        body: JSON.stringify({
            username: username,
            password: password,
            isAdmin: false
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
    .then(response => response.json())
}

export const getProfile = () => 
    fetch(`${rootServerUrl}/profile`, {
        method: 'POST',
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const logoutUser = () => {
    return fetch(`${rootServerUrl}/logout`)
                .then(response => response.json())
}

