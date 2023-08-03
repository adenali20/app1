
import {
    SEARCH_FLIGHT_REQUEST,
    SEARCH_FLIGHT_REQUEST_FAILURE,
    SEARCH_FLIGHT_REQUEST_SUCCESS} 
from './actionTypes'

import axios from 'axios';


export const searchFlightRequest=()=>{
    return {
        type:SEARCH_FLIGHT_REQUEST
    }
}

export const searchFlightRequestSuccess=(payload)=>{
    return {
        type:SEARCH_FLIGHT_REQUEST_SUCCESS,
        payload : payload
    }
}

export const searchFlightRequestFailure=(payload)=>{
    return {
        type:SEARCH_FLIGHT_REQUEST_FAILURE,
        payload:payload
    }
}


export const searchFlight=(obj)=>{
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdXBlciIsImV4cCI6MTY5MDAyNzc3MCwiaWF0IjoxNjg5OTkxNzcwfQ.feOqQlDKw64RqYEXNMnvD00e1i4DHJmDRX1isgaulP4'
    return (dispatch)=>{
        dispatch(searchFlightRequest())
        axios.get(`http://localhost:8080/flight/departureAirport/${obj.departureAirport.code}/arrivalAirport/${obj.arrivalAirport.code}/${obj.departureDate}`, {
           
            headers: {
                'Authorization': `Bearer ${token}`
              }
                
      
          },)
          .then(function (response) {
            console.log(response);

            let data=[]
            response.data.map(e=>{
                data.push({
                    "flights":e
                })
            })
           dispatch(searchFlightRequestSuccess(data))
          })
          .catch(function (error) {
            console.log(error);
            dispatch(searchFlightRequestFailure(error.message))
          });
    }
}



