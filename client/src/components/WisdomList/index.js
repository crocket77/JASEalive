import { VariablesAreInputTypesRule } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const WisdomList = ({wisdoms, interest}) => {

  const codingArr=wisdoms.filter(wisdom=>wisdom.topic==="coding")
  const musicArr=wisdoms.filter(wisdom=>wisdom.topic==="music")
  

  var codingList = false
  if(interest==="coding"&& wisdoms.length>0){
    codingList=true;
  }

  return (
    <div className="tile is-child box">
      {mentorList ? mentorArr.map(user => (
        <button className="btn w-100 display-block mb-2" key={user._id}>
          <Link to={`/profile/${user.username}`}>{user.username}</Link>
          <p>About: {user.aboutText}</p>
        </button>)):
        <p> No Mentors </p>
      }
      {menteeList && mentorArr.map(user => (
        <button className="btn w-100 display-block mb-2" key={user._id}>
          <Link to={`/profile/${user.username}`}>{user.username}</Link>
          <p>About: {user.aboutText}</p>
        </button>))
        }
    </div>
  );
};

export default WisdomList;
