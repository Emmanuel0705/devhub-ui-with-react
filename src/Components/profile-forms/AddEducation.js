import React, { Fragment, useState} from 'react';
import {connect} from 'react-redux';
import {addEducation} from '../../actions/profile'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

const AddEducation = ({addEducation,history}) =>{
    const [formData,setFormData] = useState({
        school:'',
        degree:'',
        fieldofstudy:'',
        from:'',
        to:'',
        description:'',
        current:false
    })
    const {
        school,
        degree,
        fieldofstudy,
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
       Add An Education
      </h1>
      <p className="lead">
        <i className="fa fa-code"></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <form className="form" onSubmit={e => {
        e.preventDefault()
        addEducation(formData,history);
      }}>
        <div className="form-group">
          <input type="text" placeholder="* Name of the school or bootcamp" name="school" required
           value={school} onChange = {e => onChange(e)} />
        </div>
        <div className="form-group">
          <input type="text" placeholder="* Degree" name="degree" required
           value={degree} onChange = {e => onChange(e)} />
        </div>
        <div className="form-group">
          <input value={fieldofstudy} onChange = {e => onChange(e)} 
          type="text" placeholder="Field Of Study" name="fieldofstudy"
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
            placeholder="Program Description"
          ></textarea>
        </div>
        <input type="submit" className="btn btn-primary my-1" />
        <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
      </form>
       </Fragment>
    )
}
AddEducation.propTypes = {
  addEducation:propTypes.func.isRequired
}
export default connect(null,{addEducation})(withRouter(AddEducation))