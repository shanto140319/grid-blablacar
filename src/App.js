import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import OfferSeats from './pages/OfferSeats';
import DeparturePrecise from './pages/DeparturePrecise';
import DropOff from './pages/DropOff';
import ArrivalPrecise from './pages/ArrivalPrecise';
import ChooseRoute from './pages/ChooseRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/offer'>
          <OfferSeats />
        </Route>
        <Route exact path='/offer/departure-precise'>
          <DeparturePrecise />
        </Route>
        <Route exact path='/offer/arrival'>
          <DropOff />
        </Route>
        <Route exact path='/offer/arrival-precise'>
          <ArrivalPrecise />
        </Route>
        <Route exact path='/offer/choose-your-route'>
          <ChooseRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
