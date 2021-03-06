import React,{useState,Fragment, useEffect} from 'react';
import {createProfile,getCurrentProfile} from '../../actions/profile'
import {withRouter} from 'react-router-dom'
import propTypes from 'prop-types';
import {connect} from 'react-redux';

const EditProfile = ({profile:{isLoading,profile},createProfile,history,getCurrentProfile}) => {
    const [formData,setFormData] = useState({
        company:'',
        website:'',
        location:'',
        status:'',
        skills:'',
        githubusername:'',
        bio:'',
        twitter:'',
        facebook:'',
        linkedin:'',
        youtube:'',
        instagram: ''
    })
    useEffect(() => {
        getCurrentProfile();
        setFormData({
            company: isLoading || !profile.company ? '' : profile.company,
            website: isLoading || !profile.website ? '' : profile.website,
            location: isLoading || !profile.location ? '' : profile.location,
            status: isLoading || !profile.status ? '' : profile.status,
            skills: isLoading || !profile.skills ? '' : profile.skills,
            githubusername: isLoading || !profile.githubusername ? '' : profile.githubusername,
            bio: isLoading || !profile.bio ? '' : profile.bio,
            twitter: isLoading || !profile.twitter ? '' : profile.twitter,
            facebook: isLoading || !profile.facebook ? '' : profile.facebook,
            linkedin: isLoading || !profile.linkedin ? '' : profile.linkedin,
            youtube: isLoading || !profile.youtube ? '' : profile.youtube,
            instagram: isLoading || !profile.instagram ? '' : profile.instagram

        })
    },[isLoading,getCurrentProfile])
    const {
        company,
        website,
        location,
        status,
        skills,
        githubusername,
        bio,
        twitter,
        facebook,
        linkedin,
        youtube,
        instagram
    } = formData
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value})
    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData,history,true)
    }
    
    const [showSocial,toggle] = useState(false)
    return (
        <Fragment>
        <h1 className="large text-primary">
            Create Your Profile
        </h1>
        <p className="lead">
            <i className="fa fa-user"></i> Let's get some information to make your
            profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={e => onSubmit(e)}>
            <div className="form-group">
            <select required name="status" value={status} onChange={e => onChange(e)}>
                <option value="">* Select Professional Status...</option>
                <option value="Developer">Developer</option>
                <option value="Junior Developer">Junior Developer</option>
                <option value="Senior Developer">Senior Developer</option>
                <option value="Manager">Manager</option>
                <option value="Student or Learning">Student or Learning</option>
                <option value="Instructor">Instructor or Teacher</option>
                <option value="Intern">Intern</option>
                <option value="Other">Other</option>
            </select>
            <small className="form-text"
                >Give us an idea of where you are at in your career</small
            >
            </div>
            <div className="form-group">
            <input type="text" placeholder="Company" name="company"
            value={company} onChange={e => onChange(e)} />
            <small className="form-text"
                >Could be your own company or one you work for</small
            >
            </div>
            <div className="form-group">
            <input type="text" placeholder="Website" name="website"
            value={website} onChange={e => onChange(e)} />
            <small className="form-text"
                >Could be your own or a company website</small
            >
            </div>
            <div className="form-group">
            <input value={location} onChange={e => onChange(e)}
             type="text" placeholder="Location" name="location" />
            <small className="form-text"
                >City & state suggested (eg. Boston, MA)</small
            >
            </div>
            <div className="form-group">
            <input required value={skills} onChange={e => onChange(e)}
             type="text" placeholder="* Skills" name="skills" />
            <small className="form-text"
                >Please use comma separated values (eg.
                HTML,CSS,JavaScript,PHP)</small
            >
            </div>
            <div className="form-group">
            <input
                type="text"
                placeholder="Github Username"
                name="githubusername"
                value={githubusername} onChange={e => onChange(e)}
            />
            <small className="form-text"
                >If you want your latest repos and a Github link, include your
                username</small
            >
            </div>
            <div className="form-group">
            <textarea onChange={e => onChange(e)} 
                placeholder="A short bio of yourself" 
                name="bio" value={bio}></textarea>
            <small className="form-text">Tell us a little about yourself</small>
            </div>
        
            <div className="my-2">
            <button onClick={() => toggle(!showSocial)} type="button" className="btn btn-light">
                Add Social Network Links
            </button>
            <span>Optional</span>
            </div>
         {showSocial && 
            <Fragment>
                <div className="form-group social-input">
            <i className="fa fa-twitter fa-2x"></i>
            <input type="text" placeholder="Twitter URL" name="twitter"
            value={twitter} onChange={e => onChange(e)}
             />
            </div>

            <div className="form-group social-input">
            <i className="fa fa-facebook fa-2x"></i>
            <input type="text" placeholder="Facebook URL" name="facebook"
            value={facebook} onChange={e => onChange(e)}
            />
            </div>

            <div className="form-group social-input">
            <i className="fa fa-youtube fa-2x"></i>
            <input
            value={youtube} onChange={e => onChange(e)}
             type="text" placeholder="YouTube URL" name="youtube" />
            </div>

            <div className="form-group social-input">
            <i className="fa fa-linkedin fa-2x"></i>
            <input
            value={linkedin} onChange={e => onChange(e)}
             type="text" placeholder="Linkedin URL" name="linkedin" />
            </div>

            <div className="form-group social-input">
            <i className="fa fa-instagram fa-2x"></i>
            <input 
            value={instagram} onChange={e => onChange(e)}
            type="text" placeholder="Instagram URL" name="instagram" />
            </div>
             </Fragment>}
            
            <input type="submit" className="btn btn-primary my-1" />
            <a className="btn btn-light my-1" href="dashboard.html">Go Back</a>
        </form>
        </Fragment>
    
    )
}
EditProfile.propTypes = {
    createProfile:propTypes.func.isRequired,
    profile:propTypes.object.isRequired,
    getCurrentProfile:propTypes.func.isRequired
}
const mapStateToProp = state => ({
    profile:state.profile
})
export default connect(mapStateToProp,
{createProfile,getCurrentProfile}) (withRouter(EditProfile))