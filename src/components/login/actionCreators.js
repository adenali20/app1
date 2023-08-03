
import {
    LOGIN_REQUEST,
    LOGIN_REQUEST_FAILURE,
    LOGIN_REQUEST_SUCCESS} 
from './actionTypes'

import axios from 'axios';


export const loginRequest=()=>{
    return {
        type:LOGIN_REQUEST
    }
}

export const loginRequestSuccess=(payload)=>{
    return {
        type:LOGIN_REQUEST_SUCCESS,
        payload : payload
    }
}

export const loginRequestFailure=(payload)=>{
    console.log("LLL");
    return {
        type:LOGIN_REQUEST_FAILURE,
        payload:payload
    }
}


export const login=(obj)=>{
   
    // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlciIsImV4cCI6MTY4OTk5NjY2NSwiaWF0IjoxNjg5OTYwNjY1fQ.MkWmFCaiZ_9aChjYQQejN0IIh4tBwgKmLE1yOVeCoYU'
    return (dispatch)=>{
        dispatch(loginRequest())
        axios.post(`http://localhost:8080/user/authenticate`, {
           ...obj,
            // headers: {
            //     'Authorization': `Bearer ${token}`
            //   }
                
      
          },)
          .then(function (response) {
            console.log(response);
            console.log("login success");

            let data=response.data.jwt;

          
           dispatch(loginRequestSuccess(data))
          })
          .catch(function (error) {
            console.log(error);
            dispatch(loginRequestFailure(error.message))
          });
    }
}



