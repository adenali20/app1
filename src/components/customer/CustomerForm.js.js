import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {airports} from '../../database'
import { useState } from 'react';
import axios from 'axios';
function CustomerForm() {

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
  );
}

export default  CustomerForm;