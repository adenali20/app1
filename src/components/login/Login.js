import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

import { useState } from 'react';
import axios from 'axios';

import {loginRequest,login} from './actionCreators'

import {connect} from 'react-redux'

function Login(props) {

  const [user, setUser] = useState({
    username:"",
    password:"",
  });

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("xxc",props);
   
    

    let headers = new Headers();

    let obj={
      ...user,
    }

    props.login(obj)

   


  }

  const handleChange=(e)=>{
    // console.log(props);
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });

    // console.log(flight);
  }
  
  return (
    <>
    <h1>Login</h1>
    <Form>
    

      Username:<Form.Control size="lg" type="text" placeholder="Username" name="username"   onChange={handleChange} /><br />

   

       Password :<Form.Control size="lg" type="password" placeholder="Password" name="password"   onChange={handleChange} /><br />

   
      <Button variant="primary" type="submit" onClick={(e)=>handleSubmit(e)}>
        Login
      </Button>
    </Form>
    <div>{props.isLoading==true?<>Loading</>:
    <> {props.token!==null?<Link to="/itinerary">Make a trip with us</Link>:<>{props.errorMsg }</>}
</>}</div>

   
    
    </>
  );
}

const mapStateToProps=(state)=>{
  return {
    token: state.login.token,
    isLoading : state.login.isLoading,
    errorMsg : state.login.errorMsg
  }
}


const mapDispatchToProps=(dispatch)=>{
  return {
    login :(obj)=> dispatch(login(obj))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login);