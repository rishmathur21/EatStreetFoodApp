import React from 'react';
import { connect } from 'react-redux';
import * as EatStreetService from '../service/EatStreetService';
import FooterComponent from './FooterComponent';
import { Link } from 'react-router-dom';
import PrivacyPopUpContainer from './PrivacyPopUpContainer';
import {getProfile} from '../service/Login-SignUpService';


class RestaurantLookupContainer extends React.Component {

    state = {
        streetAddress: "",
        radius: "",
        privacyAlertVisible: false,
    }

    componentDidMount = async () => {
        await getProfile()
            .then(profile => this.props.fetchUser(profile))

    }

    privacy_alert() {
        let privacy_message;

        if (this.state.privacyAlertVisible) { privacy_message = false;}
        else { privacy_message = true; }

        this.setState(prevState => ({
            privacyAlertVisible : privacy_message
        }))
    }

    validLookup = (address, radius) => {
        let validateRadius = parseInt(radius)
        if (validateRadius && validateRadius > 0 && address !== "") {
            this.props.lookupRestaurants(address, radius)
            this.props.history.push(`/restaurants`)
        }
        else {
            alert("invalid input")
        }
    }

    render = () => {

        return (
            <React.Fragment>
                <div className="container">
                    <form>
                        <div className="row">
                            <h1 className="display-3">Find a Restaurant</h1>
                        </div>

                        <React.Fragment>
                            <div className="row form-group">
                                <input
                                    className="form-control"
                                    onChange={e => {
                                        const newAddress = e.target.value;
                                        this.setState(prevState => ({
                                            streetAddress: newAddress
                                        }))
                                    }}
                                    value={this.state.streetAddress}
                                    placeholder="Enter your address"
                                />
                            </div>
                            <div className="row form-group">
                                <input
                                    className="form-control"
                                    onChange={e => {
                                        const newRadius = e.target.value;
                                        this.setState(prevState => ({
                                            radius: newRadius
                                        }))
                                    }}
                                    value={this.state.radius}
                                    placeholder="Enter your desired radius in miles"
                                />
                            </div>
                            <div className="row">
                                <button className="btn btn-lg btn-block btn-info"
                                    onClick={() => this.validLookup(this.state.streetAddress, this.state.radius)}>
                                    Lookup
                                </button>
                            </div>

                        </React.Fragment>
                    </form>

                    <div className="row">
                            <button className="mt-4 btn btn-sm btn-outline-info" onClick ={() => this.privacy_alert()}>
                                Read our Privacy Policy
                                {this.state.privacyAlertVisible && <i className="mx-2 fas fa-angle-down"></i>}
                                {!this.state.privacyAlertVisible && <i className="mx-2 fas fa-angle-right"></i>}

                            </button>

                            {this.state.privacyAlertVisible && <PrivacyPopUpContainer /> }
                    </div>
                </div>
                <FooterComponent></FooterComponent>
            </React.Fragment>
        )
    }
}

const stateMapper = (state) => ({
    user: state.user.user
})


const dispatchMapper = (dispatch) => ({
    lookupRestaurants: (streetAddress, radius) =>
        EatStreetService.lookupRestaurants(streetAddress, radius)
            .then(response => {
                // console.log(response)
                dispatch({
                    type: "UPDATE_RESTAURANT_LIST",
                    restaurants: response.restaurants
                })
            }),
    fetchUser: (user) => {
        dispatch({
            type: "FETCH_USER",
            user: user
        })
    },
})
    

export default connect(stateMapper, dispatchMapper)(RestaurantLookupContainer);
    