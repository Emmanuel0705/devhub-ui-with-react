import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const ProfileItems = ({content}) => {
 
       return (
        <div className="profile bg-light">
        <img
          className="round-img"
          src={content.user.avater}
          alt=""
        />
        <div>
       <h2>{content.user.name}</h2>
        <p>{content.status}{content.company && <span> at {content.company}</span>}</p>
         <p className="my-1">{content.location && <span> {content.location}</span>}</p>
          <Link to={`/profile/${content.user._id}`} className="btn btn-primary">View Profile</Link>
        </div>

        <ul>
            {content.skills.slice(0,4).map(skill => (
                <li className="text-primary">
                <i className="fa fa-check"></i> {skill}
              </li>
            ))}
         
         
        </ul>
      </div>
       )
}

export default ProfileItems
