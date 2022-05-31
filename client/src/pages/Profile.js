import React, { useEffect } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import AboutForm from '../components/AboutForm';
import { ADD_MENTOR } from '../utils/mutations';


const Profile = (props) => {
  // const loggedIn = Auth.loggedIn();

  const { username } = useParams();
  const [addMentor] = useMutation(ADD_MENTOR);
  


  useEffect(() => {
    console.log(`/profile/${ username }`);
  });

  const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
    variables: { username: username },
  });
  



  const user = data?.me || data?.user || {};
  console.log(user.mentors)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    return <Navigate to="/profile" />;
  } 
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleUpdateClick = async () => {
    console.log(user.username)
    try {
      await addMentor({variables: { id: user._id }});
      console.log(user.interests)
    } catch (e) {
      console.error(e);
    }
  };
  const handleClick = async () => {
    console.log(user.username)
    try {
      await addMentor({variables: { id: user._id }});
      console.log(user.interests)
    } catch (e) {
      console.error(e);
    }
  };
  var userMentor=false;
  var mentorProfile=false;
  var userProfile=false;
  if(!username && user.role==="Mentor"){
    userMentor=true;
  }
  if(username&&user.role==="Mentor"){
    mentorProfile=true;
  }
  if(username&&user.role==="User"){
    userProfile=true;
  }
  
  return (
    <div className= "">
      <div className=" mb-3 is-justify-content-center ">
        <h2 className="bg-secondary is-black-bis p-3 profileTitle mb-3 has-text-centered">
          Viewing {username ? `${user.username}'s` : 'your'} profile.
        </h2>
        
        <div className='textClass'>
        <div className='card-header-title has-text-black is-flex'>About:</div>
        <section className='card-content mb-3'>{user.aboutText ? `${user.aboutText}` : 'No about listed.'}</section>
        </div>
        
        {!username &&
          <div className="col-12 mb-3">
            <AboutForm _id={user._id}/>
          </div>
        }
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          {/* <ThoughtList
            thoughts={user.thoughts}
            title={`${user.username}'s thoughts...`}
          /> */}
        </div>

        <div className="col-12 col-lg-3 mb-3">

          {mentorProfile&& 
          <button className="btn ml-auto" onClick={handleClick}>
              Add Mentor
          </button>
          }
                  
          {userProfile && 
            <div className="col-12 mb-3">
            <h1 className='is-justify-content-left'>Mentors:</h1>
            {user.mentors && (user.mentors).map(mentor => (
                <button className="btn w-100 display-block mb-2" key={mentor._id}>
                  <Link to={`/profile/${mentor.username}`}>{mentor.username}</Link>
                </button>
              ))}
            </div>     
          }

          {/* <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          /> */}
        </div>
      </div>
      {/* <div className="mb-3">{!userParam && <ThoughtForm />}</div> */}
      
    </div>
    
  );
};

export default Profile;
