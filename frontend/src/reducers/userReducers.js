//import * as constants from '../constants/constants';
export const authReducer = (state = { user: null }, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
        case 'REGISTRATION_REQUEST':
        case 'LOAD_USER_REQUEST':
            return {
                loading: true,
                isAuthenticated: false,
            }
        case 'LOGIN_SUCCESS':
        case 'REGISTRATION_SUCCESS':
        case 'LOAD_USER_SUCCESS':
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }

        case 'LOGIN_FAIL':
        case 'LOGOUT_FAIL':
        case 'REGISTRATION_FAIL':
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }

        case 'LOAD_USER_FAIL':
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
            }
        case 'LOGOUT_SUCCESS':
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state
    }
}
export const userReducer = (state = { error: null }, action) => {
    switch (action.type) {
        
        case 'USER_DETAILS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'USER_DETAILS_SUCCESS':
            return {
                ...state,
                user: action.payload,
            }
        case 'USER_DETAILS_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                error: null,
            };
        default:
            return state
    }
}