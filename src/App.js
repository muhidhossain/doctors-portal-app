import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsZone from './Components/DoctorsZone/DoctorsZone';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/doctorsZone">
            <DoctorsZone></DoctorsZone>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
