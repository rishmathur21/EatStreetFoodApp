
const initialState = {
    accounts: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_ACCOUNT_LIST":
            return {
                ...state,
                accounts: action.accounts
            }
        case "DELETE_ACCOUNT":
            return {
                ...state,
                accounts: state.accounts.filter(account => account.username != action.username)
            }
        default:
            return state;
    }
}

export default adminReducer;