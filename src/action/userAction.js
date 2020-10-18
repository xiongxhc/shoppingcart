import { USER_LOGIN, USER_LOGOUT } from "../types"

export const userLogin = () => async (dispatch) => {
    dispatch({
        type: USER_LOGIN,
        payload: {
            login: true
        },
    })
    localStorage.setItem("login", JSON.stringify(true))
}

export const userLogout = () => async (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
        payload: {
            login: false
        },
    })
    localStorage.setItem("login", JSON.stringify(false))
}