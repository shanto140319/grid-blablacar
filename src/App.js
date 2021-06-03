import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import OfferSeats from './pages/OfferSeats';
import DeparturePrecise from './pages/DeparturePrecise';
import DropOff from './pages/DropOff';
import ArrivalPrecise from './pages/ArrivalPrecise';
import ChooseRoute from './pages/ChooseRoute';
import DeclaredStopover from './pages/DeclaredStopover';
import DeaprtureDate from './pages/DeaprtureDate';
import DepartureTime from './pages/DepartureTime';
import Comfort from './pages/Comfort';
import Seats from './pages/Seats';
import Approval from './pages/Approval';
import PriceRecomandation from './pages/PriceRecomandation';
import PriceSetting from './pages/PriceSeting';
import ProfilePic from './pages/ProfilePic';
import ReturnTrip from './pages/ReturnTrip';
import Comment from './pages/Comment';
import NavMobile from './components/NavMobile';

function App() {
  return (
    <Router>
      <Navbar />
      <NavMobile />
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
        <Route exact path='/offer/declared-stopovers'>
          <DeclaredStopover />
        </Route>
        <Route exact path='/offer/departure-date'>
          <DeaprtureDate />
        </Route>
        <Route exact path='/offer/departure-time'>
          <DepartureTime />
        </Route>
        <Route exact path='/offer/comfort'>
          <Comfort />
        </Route>
        <Route exact path='/offer/seats'>
          <Seats />
        </Route>
        <Route exact path='/offer/approval'>
          <Approval />
        </Route>
        <Route exact path='/offer/price-recomandation'>
          <PriceRecomandation />
        </Route>
        <Route exact path='/offer/price-setting'>
          <PriceSetting />
        </Route>
        <Route exact path='/offer/profile-picture'>
          <ProfilePic />
        </Route>
        <Route exact path='/offer/return-trip'>
          <ReturnTrip />
        </Route>
        <Route exact path='/offer/comment'>
          <Comment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
