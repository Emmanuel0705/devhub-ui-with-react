import React, { Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {addExperience} from '../../actions/profile'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const AddExperience = ({addExperience,history}) =>{
    const [formData,setFormData] = useState({
        title:'',
        company:'',
        location:'',
        from:'',
        to:'',
        description:'',
        current:false
    })
    const {
        title,
        company,
        location,
        from,
        to,
        description,
        current
    } = formData
    const onChange = e =>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
       <Fragment>
        <h1 className="large text-primary">
       Add An Experience
      </h1>
      <p className="lead">
        <i className="fa fa-code"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => {
        e.preventDefault()
        addExperience(formData,history);
      }}>
        <div className="form-group">
          <input type="text" placeholder="* Job Title" name="title" required
           value={title} onChange = {e => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Company" name="company" required
           value={company} onChange = {e => onChange(e)} />
        </div>
        <div className="form-group">
          <input value={location} onChange = {e => onChange(e)} 
          type="text" placeholder="Location" name="location"
           />
        </div>
        <div className="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" value={from} onChange = {e => onChange(e)} />
        </div>
         <div className="form-group">
          <p><input onChange={() => setFormData({...formData,current:!current})} type="checkbox" name="current" value="" /> Current Job</p>
        </div>
        <div className="form-group">
          <h4>To Date</h4>
          <input type="date" disabled={current} value={to} onChange = {e => onChange(e)} name="to" />
        </div>
        <div className="form-group">
          <textarea
          value={description} onChange = {e => onChange(e)}
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
       </Fragment>
    )
}
AddExperience.propTypes = {
  addExperience:propTypes.func.isRequired
}
export default connect(null,{addExperience})(withRouter(AddExperience))