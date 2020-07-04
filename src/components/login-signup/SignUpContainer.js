import React from 'react'
import { rootClientUrl } from '../../constants/constants'
import * as SignUpService from "../../service/Login-SignUpService"

class SignUpContainer extends React.Component {

    state = {
        username: "",
        password: ""
    }

    registerUser = async (username, password) => {
        // check that the username and password are not empty
        if (username === "" || password === "") {
            this.failRegister("Username and password must not be empty")
            return;
        }

        var signUpSuccess = false;
        // if the username is available then register the user
        if (await SignUpService.isUsernameAvailable(username)) {
            signUpSuccess = await SignUpService.registerUser(username, password)
        }
        else {
            this.failRegister("Username is not available")
            return;
        }

        if (signUpSuccess === 1) {
            alert("Account successfully created")
            this.props.history.push("/")
        }
        else {
            alert("Account creation failed")
            this.setState({
                username: "",
                password: ""
            })
        }

    }

    failRegister = (message) => {
        alert(message)

        this.setState(prevstate => ({
            username: "",
            password: ""
        }))
    }

    render = () => {
        return (
            <form className="container">
                <h1>Food App Account Sign Up</h1>
                <div className="form-group">
                    <label htmlFor="usernameFld">Username</label>
                    <input
                        value={this.state.username}
                        className="form-control"
                        id="usernameFld"
                        placeholder="Enter your desired username"
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
                        placeholder="Enter your desired password"
                        onChange={e => {
                            const newPassword = e.target.value;
                            this.setState(prevState => ({
                                password: newPassword
                            }))
                        }}
                    />
                </div>
                <button
                    type="button"
                    className="btn btn-success btn-block"
                    onClick={e => {
                        e.preventDefault()
                        this.registerUser(this.state.username, this.state.password)
                    }}>
                    Register
                </button>

                <button
                    type="button"
                    className="btn btn-danger btn-block"
                    onClick={() => this.props.history.push(`/`)}>
                    Cancel
                </button>
            </form>

        )
    }
}


export default SignUpContainer


