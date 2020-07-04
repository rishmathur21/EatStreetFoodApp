import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  * as FavoritesService from '../service/FavoriteRestaurantService'




class RestaurantCardComponent extends React.Component {

    // componentDidMount = () => console.log(this.props)

    constructor(props) {
        super(props);
        this.state = {
            favorited : false
        }

        this.isFavorited(this.props.user.username, this.props.restaurant.apiKey)
    }

    async isFavorited(username, restaurantId) {
        let is_favorited = false;

        let favorites_list = await FavoritesService.getFavoriteRestaurants(username);
        for (var i = 0; i < favorites_list.length; i++) {
            if (favorites_list[i].restaurantId == restaurantId) {
                is_favorited = true;   
            }
        }

        this.setState(prevState => ({
            favorited : is_favorited
        }))
    }

    async favoriteRestaurant(username, restaurantId, restaurantName) {
        let val = await FavoritesService.addFavoritedRestaurant(username, restaurantId, restaurantName);
        this.setState(prevState => ({
            favorited : true
        }))

        console.log(val);
    }

    async unfavoriteRestaurant(username, restaurantId) {
        let val = await FavoritesService.removeFavoritedRestaurant(username, restaurantId);
        this.setState(prevState => ({
            favorited : false
        }))
        console.log(val);
    }


    render() {
        let restaurant = this.props.restaurant;
        let user = this.props.user;
        
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={restaurant.logoUrl} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{restaurant.name}</h5>
                        <p className="card-text">{restaurant.streetAddress}, {restaurant.city}</p>


                        <div className="row">
                            <div className="col-sm-6">
                                <Link className="text-center btn btn-info btn-block" to={`/restaurants/${restaurant.apiKey}`} onClick={() => this.props.selectRestaurant(restaurant)}>Info</Link>
                            </div>

                            <div className="col-sm-6">
                                {!this.state.favorited && <button className="btn" onClick={() => this.favoriteRestaurant(user.username, restaurant.apiKey, restaurant.name)}> 
                                    <i className="far fa-2x fa-star"></i>
                                </button>}
                                {this.state.favorited && <button className="btn" onClick={() => this.unfavoriteRestaurant(user.username, restaurant.apiKey)}> 
                                    <i style={ {color : 'gold'}} className="fas fa-2x fa-star"></i>
                                </button>}

                            </div>
                        </div>

                   
                    </div>                   
                </div>
            </div>
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

export default connect(stateMapper, dispatchMapper)(RestaurantCardComponent);