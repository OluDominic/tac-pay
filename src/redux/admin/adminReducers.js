import adminTypes from "./adminTypes";

const INITIAL_STATE = {
    loading: true,
    data: [],
    err: '',
}

const adminReducer =(state=INITIAL_STATE, action)=> {

    switch (action.type) {
        
        case adminTypes.ADMIN_GET_BY_ID:
            return {
                ...state,
                loading: true,
                id: action.payload
            }
        case adminTypes.ADMIN_BALANCE:
            return {
                ...state,
                loading: true,
                data: action.payload
            }
        case adminTypes.ADMIN_ERROR:
            return {
                ...state,
                err: action.payload
            }
        case adminTypes.ADMIN_USER_TRANS_HIS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                err: ''
            }
        case adminTypes.ADMIN_USER_DEPO_HIS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case adminTypes.ALL_TRANS_HIS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case adminTypes.ALL_PAYMENT_HIS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case adminTypes.ALL_STUDENTS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case adminTypes.ADMIN_REGISTER:
            return {
                ...state,
                data: action.payload
            }
        case adminTypes.UPDATE_USER:
            return {
                ...state,
                data: action.payload
            }
        case adminTypes.UPDATE:
            return {
                ...state,
                data: action.payload
            }
        case adminTypes.DELETE_USER:
            return {
                ...state,
                data: action.payload
            }
    
        default:
            return state;
    }
}

export default adminReducer;