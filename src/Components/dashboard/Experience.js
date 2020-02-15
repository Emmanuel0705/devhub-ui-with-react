import React, { Fragment } from 'react';
import Moment from 'react-moment';
import propTypes from 'prop-types';
import {deleteExperience} from '../../actions/profile'
import {connect} from 'react-redux'

const Experience = ({experience,deleteExperience}) => {
    const experiences = experience.map(exp => (
    <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm" key>{exp.title}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{exp.from}</Moment> - {' '}
           {exp.to === null? ('Now') : (<Moment format="YYYY/MM/DD">{exp.to}</Moment>)}
        </td>
        <td>
            <button className="btn btn-danger" onClick={() => deleteExperience(exp._id)}>
              <i className="fa fa-trash"></i>{' '}Delete
            </button>
        </td>
    </tr>
   
    ))
    return(
        <Fragment>
            <h2 className="my-2">Experience Credentials</h2>
            <table className="table"> 
              <thead>
               <tr>
                   <th>Company</th>
                   <th className="hide-sm">Title</th>
                   <th className="hide-sm">Year</th>
                   <th> </th>
               </tr>
              </thead>
              <tbody>
                  {experiences}
              </tbody>
            </table>
        </Fragment>
    )
}
Experience.propTypes={
    experience:propTypes.array.isRequired,
    deleteExperience:propTypes.func.isRequired
}
export default connect(null,{deleteExperience})(Experience);