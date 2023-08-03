import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {airports} from '../../database'
import { useState } from 'react';
import axios from 'axios';
function BasicExample() {

  const [flight, setFlight] = useState({
    airline:"",
    number:"",
    departureAirport:"",
    departureDate:"",
    departureTime:"",
    arrivalAirport:"",
    arrivalDate:"",
    arrivalTime:""
  });

  const handleSubmit=(e)=>{
    e.preventDefault()

    let headers = new Headers();

    let obj={
      ...flight,
      airline:{
        code:flight.airline
      },
      departureAirport:{
        code:flight.departureAirport
      },
      arrivalAirport:{
        code:flight.arrivalAirport
      },
      arrivalDate:new Date(flight.arrivalDate+" "+ flight.arrivalTime),
      departureDate:new Date(flight.departureDate+" "+ flight.departureTime),
    }

    axios.post('http://localhost:8080/flight/save', {
      ...obj,

    },{
      auth: {
        username: 'user',
        password: 'pass'
      }
      
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
      console.log(flight);
    });



  }

  const handleChange=(e)=>{
    
    setFlight({
      ...flight,
      [e.target.name]: e.target.value
    });

    // console.log(flight);
  }
  
  return (
    <Form>
       Selecct Airline<br/>
        <div  className="mb-3">
          {
              [{"name": "United Airline","code": "UA" },{"name": "American Airline","code": "AA"}
              ].map((e,count)=>{
                  return  <Form.Check
                  inline
                  label={e.name}
                  name="airline"
                  type="radio"
                  id={`inline-1`}
                  value={e.code}
                  // onChange={(e) => setAirline(e.target.value)}
                  onChange={handleChange}
                />
            })
          }
        </div>
        Capacity : 50<br/>

         <Form.Control size="lg" type="number" placeholder="Airline Number" name="number"   onChange={handleChange} /><br />

        Departure Details<br/>
        Airport<br/><Form.Select aria-label="Default select example" onChange={handleChange} name="departureAirport">
          {
            airports.map(airport=>{
              return  <option value={airport.code}   >{airport.name} - ({airport.address.city})</option>
            })
          }
    
    </Form.Select>
    Time<br/>
    <Form.Control size="lg" type="date" placeholder="Airline Number" onChange={handleChange} name="departureDate"/>
    <Form.Control size="lg" type="time" placeholder="Airline Number" onChange={handleChange} name="departureTime" /><br />

    Arrival Details<br/>
    Airport<br/> <Form.Select aria-label="Default select example" onChange={handleChange} name="arrivalAirport">
          {
            airports.map(airport=>{
              return  <option value={airport.code}  >{airport.name} - ({airport.address.city})</option>
              
            })
          }
          
    
     </Form.Select>
     Time<br/>
    <Form.Control size="lg" type="date" placeholder="Airline Number" onChange={handleChange} name="arrivalDate"/>
    <Form.Control size="lg" type="time" placeholder="Airline Number" onChange={handleChange} name="arrivalTime"/><br /> 

      <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;