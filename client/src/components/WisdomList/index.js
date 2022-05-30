import { VariablesAreInputTypesRule } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const WisdomList = ({wisdoms, interest}) => {

  if (!wisdoms.length) {
    return <h3>No Wisdoms Yet</h3>;
  }

  const codingArr=wisdoms.filter(wisdom=>wisdom.topic==="coding")
  const musicArr=wisdoms.filter(wisdom=>wisdom.topic==="music")
  const fitnessArr=wisdoms.filter(wisdom=>wisdom.topic==="fitness")
  const financeArr=wisdoms.filter(wisdom=>wisdom.topic==="finance")
  const parentingArr=wisdoms.filter(wisdom=>wisdom.topic==="parenting")
  

  var codingList = false
  if(interest==="coding"&& wisdoms.length>0){
    codingList=true;
  }

    return (
    
    //     <div className="tile is-child box">
    //       {mentorList ? mentorArr.map(user => (
    //         <button className="btn w-100 display-block mb-2" key={user._id}>
    //           <Link to={`/profile/${user.username}`}>{user.username}</Link>
    //           <p>About: {user.aboutText}</p>
    //         </button>)):
    //         <p> No Mentors </p>
    //       }
    //       {menteeList && mentorArr.map(user => (
    //         <button className="btn w-100 display-block mb-2" key={user._id}>
    //           <Link to={`/profile/${user.username}`}>{user.username}</Link>
    //           <p>About: {user.aboutText}</p>
    //         </button>))
    //         }  
    <div>
      {/* <h3>{title}</h3> */}
      {wisdoms &&
        wisdoms.map(wisdom => (
          <div key={wisdom._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${wisdom.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {wisdom.username}
              </Link>{' '}
              {/* thought on {wisdom.createdAt} */}
            </p>
            <div className="card-body">
                <p>{wisdom.thoughtText}</p>
            </div>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${wisdom.youTubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ))}
    </div>
  );
};

export default WisdomList;
