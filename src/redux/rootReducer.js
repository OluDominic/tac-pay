import { combineReducers} from 'redux'
import adminReducer from './admin/adminReducers';
import {userReducer} from './users/userReducers'

const RootReducer = combineReducers({
    user: userReducer,
    admin: adminReducer
})

export default RootReducer;