import React from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom'
import './App.css';
import Home from '../src/Pages/Home/Home'
import NavBar from './Components/NavBar/NavBar';
import EventsList from './Pages/events/EventsList';
import EventDetail from './Pages/events/EventDetail';
import DonorRegistration from './Pages/Registration/DonorRegistration';
import RequestorForm from './Pages/Registration/RequestorForm'
import Section7 from './Components/Sections/Section7';

function App() {
  return (
    <Router>
      <div className="App">
       <NavBar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/donateForm" component={DonorRegistration}/>
       <Route path="/requestForm" component={RequestorForm}/>
       <Route path="/eventlists" component={EventsList}/>
       <Route path="/event/:id" component={EventDetail}/>
       </Switch>
      
      </div>
      </Router>
  );
}

export default App;
