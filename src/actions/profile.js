import axios from 'axios';
import {setAlert} from './alert'
import { GET_PROFILE, GET_PROFILES, PROFILE_ERROR, UPDATE_PROFILE, CLEAR_PROFILE } from './types';

export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get("http://localhost:5000/api/profile/me");
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
    } catch (err) {
        
        dispatch({
            type:PROFILE_ERROR,
            payload: {msg:err.response.statusText,status:err.response.status}
        })
    }
}
export const createProfile = (formData,history,edit=false) => async dispatch => {

    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        console.log(formData)
        const res = await axios.post('http://localhost:5000/api/profile',formData, config);
      
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
        dispatch(setAlert(edit ? 'Profile Updated': 'Profile Created','success'))
        if(!edit){
            history.push('/dashboard');
        }
        
    } catch (err) {
        console.log(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}
export const addEducation = (formData,history) => async dispatch => {

    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        console.log(formData)
        const res = await axios.put('http://localhost:5000/api/profile/education',
        formData, config);
         console.log(res.data)
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })
        dispatch(setAlert('Education Added','success'))
            history.push('/dashboard');
               
    } catch (err) {
        console.log(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}
export const addExperience = (formData,history) => async dispatch => {

    try {
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        console.log(formData)
        const res = await axios.put('http://localhost:5000/api/profile/experience',
        formData, config);
      
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })
        dispatch(setAlert('Experience Added','success'))
            history.push('/dashboard');
               
    } catch (err) {
        console.log(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}
export const deleteEducation = id => async dispatch => {

    try {
        
     
        const res = await axios.delete(`http://localhost:5000/api/profile/education/${id}`);
      
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })
        dispatch(setAlert('Education Deleted','danger'));
                        
    } catch (err) {
        console.log(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}
export const deleteExperience = id => async dispatch => {

    try {
        
        const res = await axios.delete(`http://localhost:5000/api/profile/experience/${id}`);
      
        dispatch({
            type:UPDATE_PROFILE,
            payload:res.data
        })
        dispatch(setAlert('Experience Deleted','danger'));
                        
    } catch (err) {
        console.log(err.message)
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg,'danger')))
        }
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}
export const getProfiles = () => async dispatch => {

    try {
        dispatch({
            type:CLEAR_PROFILE
        })
        
        const res = await axios.get(`http://localhost:5000/api/profile`);
        dispatch({
            type:GET_PROFILES,
            payload:res.data
        })
                              
    } catch (err) {
     
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}
export const getProfileById = id => async dispatch => {
   
    try {
       
        const res = await axios.get(`http://localhost:5000/api/profile/user/${id}`);
        dispatch({
            type:GET_PROFILE,
            payload:res.data
        })
                              
    } catch (err) {
      console.log(err.message)
       dispatch({
           type:PROFILE_ERROR,
           payload:{msg:err.response.statusText,status:err.response.status}
       })
    }
}