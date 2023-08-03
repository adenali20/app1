



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {connect} from 'react-redux'






function App({token,login,errorMsg}) {

  
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <Login token isLoading errorMsg/>
          </Col>
        <Col></Col>
      </Row>
      
    </Container>
  );
}

const mapStateToProps=(state)=>{
  return {
    token : state.login.token,
    isLoading : state.login.isLoading,
    errorMsg : state.login.errorMsg

  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    login :(action)=>{
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);