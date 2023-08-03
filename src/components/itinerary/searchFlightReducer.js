import {
    SEARCH_FLIGHT_REQUEST,
    SEARCH_FLIGHT_REQUEST_FAILURE,
    SEARCH_FLIGHT_REQUEST_SUCCESS} 
from './actionTypes'

import {itineraries} from '../../database'

const initialState={
    isLoading:false,
    itineraries:[],
    errorMsg:""
}

export const searchFlightReducer=(state=initialState,action)=>{

    switch(action.type){
        case  SEARCH_FLIGHT_REQUEST :
            return {
                ...state,
                isLoading:true,
                itineraries:[],
                errorMsg:""
            }
        case  SEARCH_FLIGHT_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                itineraries:[...action.payload],
                errorMsg:""
            }
        case  SEARCH_FLIGHT_REQUEST_FAILURE:
            return {
                ...state,
                isLoading:false,
                errorMsg:action.payload
            }
        default :
        return state;
            
    }
}



