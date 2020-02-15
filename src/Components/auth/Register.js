import React, {Fragment,useState}  from 'react'
import {Link,Redirect} from 'react-router-dom'
import {setAlert} from '../../actions/alert'
import {connect} from 'react-redux';
import {register} from '../../actions/auth'
import propTypes from 'prop-types'
const Register = ({setAlert,register,isAuthenticated}) => {
	const [formData,setFormData] = useState({
	name:'',
	email:'',
	password:'',
	password2:''
})
const {name,email,password,password2} = formData;
const onChange = e => setFormData({...formData,[e.target.name]:e.target.value})
const onSubmit = e => {
	e.preventDefault();
	if(password !== password2){
		setAlert("Password Do Not Match","danger",'1000');
	}else{
		register({name,email,password});
	}
}
  if(isAuthenticated){
	  return <Redirect to='/dashboard'/>
  }

	return(
	  <Fragment>
	  <div className="form-card">
		 <h1 className="text-primary lead">Sign Up</h1>
	      <p className=""><i className="fa fa-user"></i> Create Your Account</p>
	      <form className="form" action="create-profile.html"
	       onSubmit={e => onSubmit(e)}>
	        <div className="form-group">
	          <input 
	          value={name} 
	          onChange={e => onChange(e)}
	          type="text" placeholder="Name"
	           name="name"  />
	        </div>
	        <div className="form-group">
	          <input
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
	            
	            required
	            onChange={e => onChange(e)}
	          />
	        </div>
	        <div className="form-group">
	          <input
	          onChange={e => onChange(e)}
	          required
	           value={password2}
	            type="password"
	            placeholder="Confirm Password"
	            name="password2"
	          
	          />
	        </div>
	        <input type="submit" className="btn btn-primary" value="Register" />
	      </form>
	      <p className="my-1">
	        Already have an account? <Link to="/login">Sign In</Link>
	      </p>
	   </div>
	</Fragment>
		)
}
Register.propTypes = {
	setAlert: propTypes.func.isRequired,
	isAuthenticated: propTypes.bool
}
const mapStateToProps = state => ({
	isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,register})(Register)