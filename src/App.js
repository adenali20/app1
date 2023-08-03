
import value from './data.js'
import AddFlight from './components/flight/AddFlight.js'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trips from './components/itinerary/itineraries.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Itinerary from './components/itinerary/index.js';
import ShowItinerary from './components/itinerary/ShowItinerary.js';
import ShowCustomer from './components/customer/ShowCustomer.js';
import Login from './components/login/';


import {Provider} from 'react-redux'
import store from './store.js'

function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">

    

    <Routes>
          <Route exact path='/' element={<div><center><Link to="/itinerary">Make a trip with us</Link></center></div>}></Route>
          <Route exact path='/itinerary' element={< Itinerary />}></Route>

          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/show-customer' element={< ShowCustomer />}></Route>
          <Route exact path='/show-itinerary' element={< ShowItinerary/>}></Route>
          <Route exact path='/add-flight' element={< AddFlight/>}></Route>
   </Routes>
   </div>
</Router>
</Provider>

  );
}
export default App;