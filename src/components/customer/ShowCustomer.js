


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {airports} from '../../database'
import { useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import CustomerForm  from './CustomerForm.js';


function App() {
  const [person, setPerson] = useState({
    firstName:"",
    lastName:"",
    dob:"",
    email:""
   });
 
   const handleSubmit=(e)=>{
     e.preventDefault()
 
 
 
   }
 
   const handleChange=(e)=>{
     
     setPerson({
       ...person,
       [e.target.name]: e.target.value
     });
 
   }
   
   return (
    <div>
     <Form>
        Fill customer information<br/>
     
 
          <Form.Control size="lg" type="text" placeholder="First Name" name="firstName"   onChange={handleChange} /><br />
          <Form.Control size="lg" type="text" placeholder="Last Name" name="lastName"   onChange={handleChange} /><br />
 
     <Form.Control size="lg" type="date" placeholder="DOB" onChange={handleChange} name="dob"/>
     <Form.Control size="lg" type="email" placeholder="Email" name="email"   onChange={handleChange} /><br />
 
       <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
         Submit
       </Button>
     </Form>
     <div><button>Confirm</button> <Link to="/show-customer"><button >Reserve trip</button></Link></div>
</div>
   );
 }
export default App;