import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import restaurantReducer from '../reducers/RestaurantReducer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantLookupContainer from './RestaurantLookupContainer';
import RestaurantInfoContainer from './RestaurantInfoContainer';
import RestaurantListContainer from './RestaurantListContainer';
import HomepageContainer from './homepage/HomepageContainer';
import AdminContainer from './AdminContainer'
import LoginContainer from './login-signup/LoginContainer';
import SignUpContainer from './login-signup/SignUpContainer';
import PrivacyPolicyContainer from './PrivacyPolicyContainer';
import userReducer from '../reducers/UserReducer';
import adminReducer from '../reducers/AdminReducer'




const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    user: userReducer,
    admin: adminReducer,
})

const store = createStore(rootReducer)

const FoodAppContainer = ({ history, match }) => {
    return (
        <Provider store={store}>
            <Router>
                <Route
                    path="/"
                    exact={true}
                render={props => <LoginContainer {...props}></LoginContainer>} />
                <Route
                    history={history}
                    path="/signup"
                    exact={true}
                    render={props => <SignUpContainer {...props}></SignUpContainer>} />
                <Route
                    path="/search"
                    exact={true}
                    render={props => <RestaurantLookupContainer {...props}></RestaurantLookupContainer>} />
                <Route
                    path="/restaurants/:restaurantId"
                    exact={true}
                    render={props => <RestaurantInfoContainer {...props}></RestaurantInfoContainer>} />
                <Route
                    path="/restaurants"
                    exact={true}
                    render={props => <RestaurantListContainer {...props}></RestaurantListContainer>} />
                <Route
                    path="/home"
                    exact={true}
                    render={props => <HomepageContainer {...props}></HomepageContainer>} />
                <Route
                    path="/privacy-policy"
                    exact={true}
                    render={props => <PrivacyPolicyContainer {...props}></PrivacyPolicyContainer>} />
                <Route
                    path="/admin"
                    exact={true}
                    render={props => <AdminContainer {...props}></AdminContainer>} />

            </Router>
        </Provider>
    )

}

export default FoodAppContainer;

