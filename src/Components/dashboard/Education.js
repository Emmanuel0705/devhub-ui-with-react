import React, { Fragment } from 'react';
import Moment from 'react-moment';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteEducation} from '../../actions/profile'

const Education = ({education,deleteEducation}) => {
    const educations = education.map(edu => (
    <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm" key>{edu.degree}</td>
        <td className="hide-sm" key>{edu.fieldofstudy}</td>
        <td className="hide-sm">
          <Moment format="YYYY/MM/DD">{edu.from}</Moment> - {' '}
           {edu.to === null? ('Now') : (<Moment format="YYYY/MM/DD">{edu.to}</Moment>)}
        </td>
        <td>
            <button onClick={() => deleteEducation(edu._id)} className="btn btn-danger">
              <i className="fa fa-trash" ></i>{' '}Delete
            </button>
        </td>
    </tr>
   
    ))
    return(
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className="table"> 
              <thead>
               <tr>
                   <th>School</th>
                   <th className="hide-sm">Degree</th>
                   <th className="hide-sm">Fieldofstudy</th>
                   <th className="hide-sm">Year</th>
                   <th> </th>
               </tr>
              </thead>
              <tbody>
                  {educations}
              </tbody>
            </table>
        </Fragment>
    )
}
Education.propTypes={
    education:propTypes.array.isRequired,
    deleteEducation:propTypes.func.isRequired
}
export default connect(null,{deleteEducation}) (Education);