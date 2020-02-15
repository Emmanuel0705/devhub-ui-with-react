import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route,Redirect} from  'react-router-dom';

const PrivateRoute = ({component:Component, auth:{isAuthenticated,isLoading},...rest}) => 
 (<Route {...rest} render={props => !isAuthenticated && !isLoading ? (<Redirect to='login' />) 
: <Component {...props}/>} />)

PrivateRoute.propTypes = {
    auth: propTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,null)(PrivateRoute);