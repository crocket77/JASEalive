import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({usersarr, role}) => {


  return (
    <div>
      {usersarr && usersarr.map(user => (
        <button className="btn w-100 display-block mb-2" key={user._id}>
          <Link to={`/profile/${user.username}`}>{user.username}</Link>
        </button>
      ))}
    </div>
  );
};

export default UserList;
