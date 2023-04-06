import React from 'react';
import './Home.css';

const EmployeeDetails = ({ name, id, phone, profilePic }) => {
  return (
    <div className="employee-card">
      <div className="profile-pic">
        <img src={profilePic} alt={`${name}'s profile picture`} />
      </div>
      <div className="employee-info">
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
}

export default EmployeeDetails;
