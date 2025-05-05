import React from 'react';

function Profile({ name, imgURL }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={imgURL} alt={name} style={{ width: '200px', borderRadius: '10px' }} />
    </div>
  );
}

export default Profile;
