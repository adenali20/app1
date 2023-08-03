import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


import { useState } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {connect} from 'react-redux'
function Trips({itineraries,errorMsg,isLoading}) {
  
  return (
     <div  className="mb-3">
      <>{errorMsg}</>
          
          <div>{isLoading?<>loading</>:<>{
             itineraries && itineraries.map((itinerary,count)=>{
                  return  <div>
                    {
                       <Link to="/show-itinerary" state={{ "data": {itinerary}}}>{ itinerary.flights[0].airline.name}</Link>
                    }
                    {
                      itinerary.flights.map((flight,count)=>{
                        return <div>{flight.departureAirport.name}---{flight.arrivalAirport.name} </div>
                      })
                    }
                    
                   
                  </div>
            })
          }</>}</div>
        </div>
      
  );
}

const mapStateToProps=(state)=>{
  return {
    itineraries : state.searchFlight.itineraries,
    errorMsg : state.searchFlight.errorMsg,
    isLoading : state.searchFlight.isLoading
  }
}

// const mapDispatchToProps=(dispatch)=>{
//   return {
//     searchFlight :(action)=>{
//       dispatch(action)
//     }
//   }
// }


export default connect(mapStateToProps,null)(Trips);