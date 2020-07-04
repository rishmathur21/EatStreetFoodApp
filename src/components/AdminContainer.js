import React from 'react';
import FooterComponent from './FooterComponent'
import { connect } from 'react-redux';
import { rootServerUrl } from '../constants/constants';


class AdminContainer extends React.Component {

    componentDidMount = () => {
        this.getAllAccounts()
            .then(accounts => this.props.updateAllAccounts(accounts))
    }
        

    getAllAccounts = () => {
        return fetch(`${rootServerUrl}/users`).then(response => response.json())
    }

    deleteAccount = async (username) => {
        let deleteStatus = await fetch(`${rootServerUrl}/users/${username}`, {
            method: 'DELETE'
        }).then(response => response.json())

        if (deleteStatus === 1) {
            this.props.deleteAccount(username)
        }
        else {
            alert("Deletion of account failed")
        }
    }
    
    render = () => {
        return (
            <div className="container">
                <h1>User List</h1>
    
                <ul className="list-group">
                    <li className="list-group-item" >Username</li>
                {
                    this.props.accounts.map(account => {
                        return (
                            <li className="list-group-item" key={account.username}>
                                <div className="row">
                                    <div className="col-11">
                                        {account.username}
                                    </div>
                                    <div className="col-1">
                                        <button type="button" className="btn btn-danger" onClick={() => this.deleteAccount(account.username)}>Delete</button>
                                    </div>
                                </div>
                                
                            </li>
                        )
                    })
                }
                </ul>
            

                <FooterComponent></FooterComponent>
            </div>
        )
    }
    
}

const stateMapper = (state) => ({
    accounts: state.admin.accounts
})

const dispatchMapper = (dispatch) => ({
    updateAllAccounts: (accounts) => {
        dispatch({
            type: "UPDATE_ACCOUNT_LIST",
            accounts: accounts
        })
    },
    deleteAccount: (username) => {
        dispatch({
            type: "DELETE_ACCOUNT",
            username: username
        })
    },
})

export default connect(stateMapper, dispatchMapper)(AdminContainer)