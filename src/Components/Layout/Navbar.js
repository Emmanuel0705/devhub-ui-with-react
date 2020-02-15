import React, { Fragment } from 'react'
import {Link} from 'react-router-dom' 
import {connect} from 'react-redux'
import propTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Navbar = ({auth:{isAuthenticated,isLoading},logout}) => {
  const authLinks = (
    <ul>
       <li>
      <Link to="/dasboard"><i className="fa fa-user"/>{'  '}
      <span className="sm-hide">
        Dashboard
        </span>
        </Link>
    </li>
    <li>
      <a onClick={logout} href="#!">
        <i className='fa fa-sign-out' />{' '}
        <span className="hide-sm">Logout</span> 
      </a>
    </li>
   
  </ul>
  );
  const guestLinks = (
    <ul>
   
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </ul>
  );
	return (
	<nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fa fa-code"></i> DevConnector
        </Link>
      </h1>
       {!isLoading && (<Fragment>{isAuthenticated?authLinks:guestLinks}</Fragment>)}
    </nav>
		)
}
Navbar.propTypes = {
  logout:propTypes.func.isRequired,
  auth: propTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth:state.auth
})
export default connect(mapStateToProps,{logout})(Navbar);