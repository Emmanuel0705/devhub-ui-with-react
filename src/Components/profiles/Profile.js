import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { getProfileById } from '../../actions/profile';
import Loader from '../Layout/Loader';
import {Link} from 'react-router-dom';

const Profile = ({match,getProfileById,profile:{profile,isLoading}}) => {
    useEffect(() => {
        getProfileById(match.params.id)
    },[getProfileById])
       return (
        <Fragment>
          <Link to="/developers" className="btn btn-light">Back To Profiles</Link>
         {isLoading || profile === null ? <Loader/>:
             
            
              <div className="profile-grid my-1">
               
                <div className="profile-top bg-primary p-2">
                  <img
                    className="round-img my-1"
                    src={profile.user.avater}
                    alt=""
                  />
                  <h1 className="large">{profile.user.name} </h1>
                  <p className="lead">Developer at Microsoft</p>
                  <p>Seattle, WA</p>
                  <div className="icons my-1">
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-globe fa-2x"></i>
                    </a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter fa-2x"></i>
                    </a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-facebook fa-2x"></i>
                    </a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                     <a href="#!" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-youtube fa-2x"></i>
                    </a>
                    <a href="#!" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-instagram fa-2x"></i>
                    </a>
                  </div>
                </div>
        
            
                <div className="profile-about bg-light p-2">
                  <h2 className="text-primary">John's Bio</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                    doloremque nesciunt, repellendus nostrum deleniti recusandae nobis
                    neque modi perspiciatis similique?
                  </p>
                  <div className="line"></div>
                  <h2 className="text-primary">Skill Set</h2>
                  <div className="skills">
                    <div className="p-1"><i className="fa fa-check"></i> HTML</div>
                    <div className="p-1"><i className="fa fa-check"></i> CSS</div>
                    <div className="p-1"><i className="fa fa-check"></i> JavaScript</div>
                    <div className="p-1"><i className="fa fa-check"></i> Python</div>
                    <div className="p-1"><i className="fa fa-check"></i> C#!</div>
                  </div>
                </div>
        
          
                <div className="profile-exp bg-white p-2">
                  <h2 className="text-primary">Experience</h2>
                  <div>
                    <h3 className="text-dark">Microsoft</h3>
                    <p>Oct 2011 - Current</p>
                    <p><strong>Position: </strong>Senior Developer</p>
                    <p>
                      <strong>Description: </strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                      ipsam, sapiente suscipit dicta eius velit amet aspernatur
                      asperiores modi quidem expedita fugit.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-dark">Sun Microsystems</h3>
                    <p>Nov 2004 - Nov 2011</p>
                    <p><strong>Position: </strong>Systems Admin</p>
                    <p>
                      <strong>Description: </strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                      ipsam, sapiente suscipit dicta eius velit amet aspernatur
                      asperiores modi quidem expedita fugit.
                    </p>
                  </div>
                </div>
        
               
                <div className="profile-edu bg-white p-2">
                  <h2 className="text-primary">Education</h2>
                  <div>
                    <h3>University Of Washington</h3>
                    <p>Sep 1993 - June 1999</p>
                    <p><strong>Degree: </strong>Masters</p>
                    <p><strong>Field Of Study: </strong>Computer Science</p>
                    <p>
                      <strong>Description: </strong>Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Dignissimos placeat, dolorum ullam
                      ipsam, sapiente suscipit dicta eius velit amet aspernatur
                      asperiores modi quidem expedita fugit.
                    </p>
                  </div>
                </div>
    
         </div> 
            
         }
           
        </Fragment>
       )
} 
Profile.propTypes = {
    profile:propTypes.object.isRequired,
    getProfileById:propTypes.func.isRequired
}
const mapStateToProp = state => ({
    profile: state.profile
})
export default connect(mapStateToProp,{getProfileById})(Profile)
