import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FooterComponent from './FooterComponent'

const RestaurantInfoContainer = ({ restaurant }) => {
    return (
        <div className="container">
            <div className="row">
                <Link
                    className="btn btn-outline-info my-2"
                    to="/restaurants"
                >
                    Back
                </Link>
            </div>
            <div className="row">
                <img src={restaurant.logoUrl} alt=""></img>
            </div>
            <form>
                <div className="form-group">
                    <label className="display-3">{restaurant.name}</label>
                </div>
                <div className="form-group">
                    <label className="h2">{restaurant.streetAddress} {restaurant.city}, {restaurant.state} {restaurant.zip} </label>
                </div>
                <div className="form-group">
                    <label className="h3 font-weight-bold">Hours</label>
                </div>
                {
                    restaurant.hours.Monday &&
                    <div className="form-group">
                        <label>Monday: {(restaurant.hours.Monday.map(time => time + "   "))}</label>
                    </div>
                }
                {
                    restaurant.hours.Tuesday &&
                    <div className="form-group">
                        <label>Tuesday: {(restaurant.hours.Tuesday.map(time => time + "   "))}</label>
                    </div>
                }
                {
                    restaurant.hours.Wednesday &&
                    <div className="form-group">
                        <label>Wednesday: {(restaurant.hours.Wednesday.map(time => time + "   "))}</label>
                    </div>
                }
                {
                    restaurant.hours.Thursday &&
                    <div className="form-group">
                        <label>Thursday: {(restaurant.hours.Thursday.map(time => time + "   "))}</label>
                    </div>
                }
                {
                    restaurant.hours.Friday &&
                    <div className="form-group">
                        <label>Friday: {(restaurant.hours.Friday.map(time => time + "   "))}</label>
                    </div>
                }
                {
                    restaurant.hours.Saturday &&
                    <div className="form-group">
                        <label>Saturday: {(restaurant.hours.Saturday.map(time => time + "   "))}</label>
                    </div>
                }
                {
                    restaurant.hours.Sunday &&
                    <div className="form-group">
                        <label>Sunday: {(restaurant.hours.Sunday.map(time => time + "   "))}</label>
                    </div>
                }
            </form>

            <FooterComponent></FooterComponent>

        </div>

    )
}

const stateMapper = state => ({
    restaurant: state.restaurants.selectedRestaurant, 
    user: state.user.user
})

const dispatchMapper = (dispatch) => ({
    fetchUser: (user) => {
        dispatch({
            type: "FETCH_USER",
            user: user
        })
    },
})

export default connect(stateMapper, dispatchMapper)(RestaurantInfoContainer);