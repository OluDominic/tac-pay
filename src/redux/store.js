import { createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import RootReducer from './rootReducer';

const applymiddleware = [logger, thunk]



export const store = createStore(RootReducer, applyMiddleware(...applymiddleware))

//export default store;