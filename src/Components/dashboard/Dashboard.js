import React, {useEffect, Fragment} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../../actions/profile';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from '../Layout/Loader';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({getCurrentProfile,
    auth:{user},
    profile:{isLoading,profile}}) => {
    useEffect(() => {
        getCurrentProfile()
    },[getCurrentProfile]);
    return isLoading && profile === null ? <Loader/> :
    <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
            <i className="fa fa-user"></i>Welcome {user && user.name}
        </p>
        {profile !== null ? 
        (<Fragment>
            <DashboardActions/>
            <Experience experience={profile.experience}/>
            <Education education={profile.education}/>
        </Fragment>):
        (<Fragment>
            <p>You have not yet setup a password,please add some info</p>
            <Link to='/create-profile' className="btn btn-primary my-1">
                <i className="fa fa-pencil"></i>{' '}
                Create Profile
            </Link>
        </Fragment>)}
    </Fragment>
}
Dashboard.propTypes = {
    auth:propTypes.object.isRequired,
    getCurrentProfile:propTypes.func.isRequired,
    profile:propTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile:state.profile,
    auth:state.auth
})
export default connect(mapStateToProps,{getCurrentProfile})(Dashboard)