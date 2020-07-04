import React from 'react'
import * as LoginService from "../../service/Login-SignUpService"
import { rootServerUrl, rootClientUrl } from "../../constants/constants"
import { connect } from 'react-redux'


class LoginContainer extends React.Component {

    

    // the login page only needs to store user input for the username and password for the account they use
    state = {
        username: "",
        password: ""
    }

    



    // first check if the user has an account on the server and if they do not, fail the login attemp
    // otherwise send the user to the home page for their account
    loginUser = async (username, password) => {
        // check that the username and password are not empty
        if (username === "" || password === "") {
            this.failLogin("Username and password must not be empty")
            return;
        }

        var userAccount;

        await LoginService.loginUser(username, password)
            .then(text => text ? userAccount = text : userAccount = null)


        if (userAccount.username !== "") {
            this.props.fetchUser(userAccount)
            this.props.history.push(`/home`)
        }
        else this.failLogin("Invalid username/password combo");
        
    }

    failLogin = (message) => {
        alert(message)

        this.setState(prevstate => ({
            username: "",
            password: ""
        }))
    }


    render = () => {
        return (
            <form className="container">
                <h1>Food App Login </h1>
                <div className="form-group">
                    <label htmlFor="usernameFld">Username</label>
                    <input
                        value={this.state.username}
                        className="form-control"
                        id="usernameFld"
                        placeholder="Enter your username"
                        onChange={e => {
                            const newUsername = e.target.value;
                            this.setState(prevState => ({
                                username: newUsername
                            }))
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordFld">Password</label>
                    <input
                        value={this.state.password}
                        type="password"
                        className="form-control"
                        id="passwordFld"
                        placeholder="Enter your password"
                        onChange={e => {
                            const newPassword = e.target.value;
                            this.setState(prevState => ({
                                password: newPassword
                            }))
                        }}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success btn-block"
                    onClick={e => {
                        e.preventDefault()
                        this.loginUser(this.state.username, this.state.password)
                    }}
                >
                    Login
                </button>
                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    onClick={e => {
                        e.preventDefault()
                        this.props.history.push(`/signup`)
                    }}
                >
                    Create Account
                </button>
            </form>
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

export default connect(stateMapper, dispatchMapper)(LoginContainer);