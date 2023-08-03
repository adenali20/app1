import {createStore,applyMiddleware,combineReducers} from 'redux'
import {searchFlightReducer} from './components/itinerary/searchFlightReducer.js'
import {loginReducer} from './components/login/loginReducer.js'

import thunk from 'redux-thunk'


const rootReducer=combineReducers({searchFlight:searchFlightReducer,login:loginReducer})

const store=createStore(rootReducer,applyMiddleware(thunk))



// store


export default store

