import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS} 
from './actionTypes'


const initialState={
    isLoading:false,
    token:null,
    errorMsg:""
}

export const loginReducer=(state=initialState,action)=>{

    switch(action.type){
        case  LOGIN_REQUEST :
            return {
                ...state,
                isLoading:true,
                token:null,
                errorMsg:""
            }
        case  LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                token:action.payload,
                errorMsg:""
            }
        case  LOGIN_REQUEST_FAILURE:
            return {
                ...state,
                isLoading:false,
                token:null,
                errorMsg:action.payload
            }
        default :
        return state;
            
    }
}



