import React, {Fragment,useState}  from 'react'
import {Link,Redirect} from 'react-router-dom'
import {connect} from 'react-redux';
import { login } from '../../actions/auth';
import propTypes from 'prop-types';

const Login = ({login,isAuthenticated}) => {
	const [formData,setFormData] = useState({
	email:'',
	password:''
})
const {email,password} = formData;
const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
const onSubmit = e => {
	e.preventDefault();
	  login(email,password);
	  
}
if(isAuthenticated){
	return <Redirect to='/dashboard'/>
}

	return(
	  <Fragment>
	  <div className="form-card">
		 <h1 className="text-primary lead">Signin</h1>
	      <p className=""><i className="fa fa-user"></i>Signin TO Your Account </p>
	      <form className="form" action="create-profile.html"
	       onSubmit={e => onSubmit(e)}>
	       
	        <div className="form-group">
	          <input required 
	          value={email}
	           type="email"
	           onChange={e => onChange(e)}
	            placeholder="Email Address" 
	            name="email" />
	          <small className="form-text"
	            >This site uses Gravatar so if you want a profile image, use a
	            Gravatar email</small>
	        </div>
	        <div className="form-group">
	          <input
	           value={password}
	            type="password"
	            placeholder="Password"
	            name="password"
	            minLength="6"
	            required
	            onChange={e => onChange(e)}
	          />
	        </div>
	       
	        <input type="submit" className="btn btn-primary" value="Register" />
	      </form>
	      <p className="my-1">
	        Don't have an account? <Link to="/register">Register</Link>
	      </p>
	   </div>
	</Fragment>
		)
}
login.propTypes = {
	login:propTypes.func.isRequired,
	isAuthenticated:propTypes.bool
}
const mapStateToProps = state => ({
	isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login)