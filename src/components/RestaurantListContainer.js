import React from 'react';
import { connect } from 'react-redux'
import RestaurantCardComponent from './RestaurantCardComponent';
import FooterComponent from "./FooterComponent";
import { Link } from 'react-router-dom';


const RestaurantListContainer = ({user, restaurants, selectRestaurant }) =>

    <div className="container">

        <div className="row">
            <Link
                className="my-2 btn btn-outline-info"
                to="/search"
            >
                Back to search
            </Link>
        </div>

        <div className="row form-group overflow-auto">
            {restaurants.map(restaurant => {
                return (
                    <RestaurantCardComponent
                        key={restaurant.apiKey}
                        selectRestaurant={selectRestaurant}
                        restaurant={restaurant}
                        user={user}
                    ></RestaurantCardComponent>
                )
            })}
        </div>

        <FooterComponent></FooterComponent>


    </div>



const stateMapper = (state) => ({
    restaurants: state.restaurants.restaurants,
    user: state.user.user
})

const dispatchMapper = (dispatch) => ({
    selectRestaurant: (restaurant) => {
        dispatch({
            type: "SELECT_RESTAURANT",
            restaurant: restaurant
        })
    },
    fetchUser: (user) => {
        dispatch({
            type: "FETCH_USER",
            user: user
        })
    },

})


export default connect(stateMapper, dispatchMapper)(RestaurantListContainer);