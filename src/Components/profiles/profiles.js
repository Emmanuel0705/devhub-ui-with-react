import React, { Fragment, useEffect } from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import { getProfiles } from '../../actions/profile';
import ProfileItems from './profileItem';
import Loader from '../Layout/Loader';

const Profiles = ({profile:{profiles,isLoading},getProfiles}) => {
    useEffect(() => {
        getProfiles()
    },[getProfiles])
       return (
        <Fragment>
            <h1 class="large text-primary">Developers</h1>
          <p class="lead">
           <i class="fa fa-connectdevelop"></i> Browse and connect with developers
         </p>
         <div class="profiles">
         {isLoading ? (<Loader/>): 
         profiles.map(pro => 
            (<ProfileItems key={pro._id} content={pro}/>)
        )

         }
           
         </div>
        </Fragment>
       )
} 
Profiles.propTypes = {
    profile:propTypes.object.isRequired,
    getProfiles:propTypes.func.isRequired
}
const mapStateToProp = state => ({
    profile: state.profile
})
export default connect(mapStateToProp,{getProfiles})(Profiles)
