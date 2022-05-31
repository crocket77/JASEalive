import { VariablesAreInputTypesRule } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const WisdomList = ({wisdoms, interest, username}) => {
  var wisdomArr=[]
  if (!wisdoms.length) {
    return <h3>No Wisdoms Yet</h3>;
  }
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
  if(interest==="coding"&& wisdoms.length>0){
    codingWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="coding")
  }
  var codingWisdom = false
  if(interest==="coding"&& wisdoms.length>0){
    codingWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="coding")
  }
  var musicWisdom = false
  if(interest==="music"&& wisdoms.length>0){
    musicWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="music")

  }
  var fitnessWisdom = false
  if(interest==="fitness"&& wisdoms.length>0){
    fitnessWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="fitness")
  }
  var financeWisdom = false
  if(interest==="finance"&& wisdoms.length>0){
    financeWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="finance")
  }
  var parentingWisdom = false
  if(interest==="parenting"&& wisdoms.length>0){
    parentingWisdom=true;
    wisdomArr=wisdoms.filter(wisdom=>wisdom.topic==="parenting")
  }
  var everythingWisdom = false
  if(interest==="everything"&& wisdoms.length>0){
    everythingWisdom=true;
    wisdomArr=wisdoms
  }

    return (
    <div>
      {/* <h3>{title}</h3> */}
      {wisdomArr &&
        wisdomArr.map(wisdom => (
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
            {/* <iframe width="560" height="315" src={`https://www.youtube.com/embed/${wisdom.youTubeLink}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          </div>
        ))}

    </div>
  );
};

export default WisdomList;
