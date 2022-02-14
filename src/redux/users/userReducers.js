import userTypes from './userTypes'

const INITIAL_STATE = {
    user: [],
    err: '',
    loading: true,
    users : JSON.parse(localStorage.getItem('userdata'))
}

export function userReducer(state=INITIAL_STATE, action) {

    switch (action.type) {
        case userTypes.USER_LOGIN: return {
            ...state,
            user: action.payload,
            err: ''
        }
        case userTypes.USER_ERRORS: return {
            ...state,
            loading: false,
            user: [],
            err: action.payload
        }
        case userTypes.USER_AUTHENTICATE: return {
            ...state,
            users: action.payload
        }
        case userTypes.USER_DEPOSIT: return {
            ...state,
            user: action.payload,
            loading: false
        }
        case userTypes.USER_TRANSACTION_HIS: return {
            ...state,
            user: action.payload,
            loading: false
        }
            
    
        default: return state;
    }
}

