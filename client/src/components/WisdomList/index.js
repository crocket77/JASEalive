import { VariablesAreInputTypesRule } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const WisdomList = ({wisdoms, interest, username}) => {
  var wisdomArr=[]
  // if (!wisdoms.length) {
  //   return <h3>No Wisdoms Yet</h3>;
  // }
  console.log(username)
  if(username){
    wisdomArr=wisdoms.filter(wisdom=>wisdom.username===username)
    console.log(wisdomArr)
  }

  
  // const codingArr=[]
  // const musicArr=[]
  // const fitnessArr=[]
  // const financeArr=[]
  // const parentingArr=[]
  
  // conditionals that give the correct wisdom..
  var codingWisdom = false
  if(interest==="coding"){
    codingWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="coding")
  }
  var musicWisdom = false
  if(interest==="music"){
    musicWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="music")
  }
  var fitnessWisdom = false
  if(interest==="fitness"){
    fitnessWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="fitness")
  }
  var financeWisdom = false
  if(interest==="finance"){
    financeWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="finance")
  }
  var parentingWisdom = false
  if(interest==="parenting"){
    parentingWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="parenting")
  }
  var everythingWisdom = false
  if(interest==="everything"){
    everythingWisdom=true;
    wisdomArr=wisdoms
  }

  return (
    <div className="tile columns is-multiline is-flex is-parent">
      {/* <h3>{title}</h3> */}
      {everythingWisdom &&
        wisdomArr.map(wisdom => (
          <div key={wisdom._id} className="column mb-3 is-child box">
            <p className="card-header">
              <Link
                to={`/profile/${wisdom.username}`}
                style={{ fontWeight: 700 }}
                className="text-dark"
              >
                {wisdom.username}
              </Link>{' '}
              {/* thought on {wisdom.createdAt} */}
            </p>
            <div className="column card-body">
              <p>{wisdom.wisdomText}</p>
            </div>
            <iframe width="280" height="158" src={`https://www.youtube.com/embed/${wisdom.youTubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ))}
    </div>
  );
};

export default WisdomList;
