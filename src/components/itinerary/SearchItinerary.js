import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {airports} from '../../database'
import { useState } from 'react';
import axios from 'axios';

import {searchFlightRequest,searchFlight} from './actionCreators'

import {connect} from 'react-redux'

function SearchFlight(props) {

  const [flight, setFlight] = useState({
    departureAirport:"",
    departureDate:"",
    arrivalAirport:"",
    arrivalDate:""
  });

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("xxc",props);
   
    

    let headers = new Headers();

    let obj={
      ...flight,
      departureAirport:{
        code:flight.departureAirport
      },
      arrivalAirport:{
        code:flight.arrivalAirport
      },
      departureDate:flight.departureDate
    }

    props.searchFlight(obj)

   


  }

  const handleChange=(e)=>{
    // console.log(props);
    setFlight({
      ...flight,
      [e.target.name]: e.target.value
    });

    // console.log(flight);
  }
  
  return (
    <>

    <h1>Search Flights</h1>
    <Form>
    

        Departure Airport : <Form.Select aria-label="Default select example" onChange={handleChange} name="departureAirport">
          {
            airports.map(airport=>{
              return  <option value={airport.code}   >{airport.name} - ({airport.address.city})</option>
            })
          }
    
    </Form.Select>
   

    Arrival Airport :  <Form.Select aria-label="Default select example" onChange={handleChange} name="arrivalAirport">
          {
            airports.map(airport=>{
              return  <option value={airport.code}  >{airport.name} - ({airport.address.city})</option>
              
            })
          }
          
    
     </Form.Select>
     Date<br/>
    <Form.Control size="lg" type="date" placeholder="Airline Number" onChange={handleChange} name="departureDate"/>
      <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
        Submit
      </Button>
    </Form>
    
    </>
  );
}



const mapDispatchToProps=(dispatch)=>{
  return {
    searchFlight :(obj)=> dispatch(searchFlight(obj))
  }
}


export default connect(null,mapDispatchToProps)(SearchFlight);