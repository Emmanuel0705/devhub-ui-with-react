import React, {Fragment,useEffect} from 'react';
import Landing from './Components/Layout/Landing';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Login from './Components/auth/Login'
import Register from './Components/auth/Register'
import './App.css';
import {Provider} from 'react-redux';
import store from './store'
import Alert from './Components/Layout/alert'
import { loadUser } from './actions/auth';
import setAuthToken from './util/setAuthToken';
import Dashboard from './Components/dashboard/Dashboard';
import PrivateRoute from './Components/routing/PrivateRoute';
import CreateProfile from './Components/profile-forms/CreateProfile';
import EditProfile from './Components/profile-forms/EditProfile';
import AddExperience from './Components/profile-forms/AddExperience';
import AddEducation from './Components/profile-forms/AddEducation';
import Profiles from './Components/profiles/profiles';
import Profile from './Components/profiles/Profile';

if(localStorage.token){
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect( () => {
    store.dispatch(loadUser())
  },[])
  return (
    <Provider store={store}>
    <Router>
      <Fragment>
         <Navbar/>
         <Route exact path='/' component={Landing}/>
         <section className="container">
           <Alert/>
           <Switch>
              <PrivateRoute exact path="/add-experience" component={AddExperience}/>
              <PrivateRoute exact path="/add-education" component={AddEducation}/>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
              <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
              <Route exact path="/developers" component={Profiles}/>
              <Route exact path="/profile/:id" component={Profile}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/> 
            </Switch>
         </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
