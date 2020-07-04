import React from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../../service/Login-SignUpService';
import { connect } from 'react-redux';
import FooterComponent from '../FooterComponent';
import  * as FavoritesService from '../../service/FavoriteRestaurantService'
import * as LoginService from '../../service/Login-SignUpService'

class HomepageContainer extends React.Component {

    componentDidMount = async () => {
        await LoginService.getProfile()
            .then(user => {
                console.log(user)
                this.props.fetchUser(user)})
        if (this.props.user === null) {
            this.props.history.push("/")
            return
        }
        this.getFavorites(this.props.user.username);
        
    }

    constructor(props) {
        super(props);
        this.state = {
            favorites : []
        }
        
    }

    

    async getFavorites(username) {
        let favorites_list = await FavoritesService.getFavoriteRestaurants(username)
        this.setState(prevState => ({
            favorites : favorites_list
        }))
        console.log(this.state.favorites);
    }

    logout = async () => {
        let logoutStatus = await LoginService.logoutUser()
        if (logoutStatus === 1) this.props.history.push("/")
    }

    render = () => {

        return ( this.props.user &&
            <React.Fragment>
                <div className="container">
                    <h1 className="display-4"> Welcome to Food App, {this.props.user.username}</h1>                    
                
                    <div className="NavigationButtons">
                        <div className="row form-group"> 
                            <button type="button" className="text-white btn btn-info btn-lg btn-block">
                                <Link className="text-white" to="/search">
                                    Restaurant Search Bar
                                </Link>
                            </button>
                        </div>
                        <div className="row form-group"> 
                            <div class="card col-sm-12">
                                <div class="card-body">
                                    <h5 class="card-title">Favorite Restaurants </h5>
                                        <ul className="list-group">
                                        {this.state.favorites.map(restaurant => {
                                            console.log(restaurant)
                                            return (
                                            <li className="list-group-item list-group-item-light"> {restaurant.restaurantName} </li>             
                                            )
                                        })}
                                    </ul>
                                    
                                </div>
                            </div>
            
                        </div>
                            {
                                this.props.user && this.props.user.admin &&
                                <div className="row form-group">
                                    <button type="button" className="text-white btn btn-danger btn-lg btn-block">
                                        <Link className="text-white" to="/admin">
                                            Admin page
                                        </Link>
                                    </button>
                                </div>
                            }
                            <div className="row form-group">
                                <button type="button" className="btn btn-danger btn-lg btn-block" onClick={() => this.logout()}>
                                    Logout
                            </button>
                            </div>
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
    fetchUser: (user) => {
        dispatch({
            type: "FETCH_USER",
            user: user
        })
    },
})

export default connect(stateMapper, dispatchMapper)(HomepageContainer);