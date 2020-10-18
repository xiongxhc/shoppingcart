const { USER_LOGIN, USER_LOGOUT } = require("../types");

export const userReducer = ( state = {
    login: JSON.parse(localStorage.getItem("login") || "false" )
}, action ) => {

    switch(action.type) {
        case USER_LOGIN: 
            return {
                login: action.payload.login
            }

        case USER_LOGOUT: 
            return {
                login: action.payload.login
            }

        default: 
            return state;
    }

} 