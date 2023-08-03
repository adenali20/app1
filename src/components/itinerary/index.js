



import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchItinerary from './SearchItinerary';
import Itineraries from './itineraries';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {connect} from 'react-redux'






function App({itineraries,searchFlight}) {

  
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={6}>
          <SearchItinerary/>
          <Itineraries itineraries={itineraries} searchFlight={searchFlight}/></Col>
        <Col></Col>
      </Row>
      
    </Container>
  );
}

const mapStateToProps=(state)=>{
  return {
    itineraries : state.itineraries
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    searchFlight :(action)=>{
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);