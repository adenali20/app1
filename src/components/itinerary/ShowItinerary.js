



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchTrip from './SearchItinerary';
import Trips from './itineraries';

import CustomerForm from '../customer/CustomerForm.js'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import { useLocation } from 'react-router-dom'

import {useEffect,useState} from 'react'

function App(props) {
  const location = useLocation()
  const { data } = location.state


  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>Trip data
       
        
        {
                      data.itinerary.flights.map((flight,count)=>{
                        return <div>{flight.departureAirport.name}---{flight.arrivalAirport.name} </div>
                      })
                    }
        
        <div> 
         
          _______________________________________________________________<br/>
          <Link to="/show-customer"><button >Continue</button></Link></div>

        
        </Col>
        <Col></Col>
       
      </Row>
      
    </Container>
  );
}
export default App;