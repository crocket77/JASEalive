import React, { useEffect } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME,QUERY_WISDOMS } from '../utils/queries';
import Auth from '../utils/auth';
import AboutForm from '../components/AboutForm';
import { ADD_MENTOR } from '../utils/mutations';
import WisdomForm from '../components/WisdomForm';
import WisdomList from '../components/WisdomList';
import UserList from '../components/UserList';


const Profile = (props) => {
  const loggedIn = Auth.loggedIn();
  const { username } = useParams();  
  const [addMentor] = useMutation(ADD_MENTOR);

  // useEffect(() => {
  //   console.log(`/profile/${ username }`);
  // });
  //user query
  const { loading, data } = useQuery(username ? QUERY_USER : QUERY_ME, {
    variables: { username: username },
  });

  const { loading:wisdomLoading, data:wisdoms } = useQuery(QUERY_WISDOMS);

  const user = data?.me || data?.user || {};
  console.log("user ", user)
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === username) {
    return <Navigate to="/profile" />;
  }   

  if (loading||wisdomLoading) {
    return <div>Loading...</div>;
  }

  const wisdomsArr=wisdoms.wisdoms

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  //handle click logic
  const handleClick = async () => {
    console.log(user.username)
    try {
      await addMentor({variables: { id: user._id }});
      console.log(user.interests)
    } catch (e) {
      console.error(e);
    }
  };

  //type of profile logic
  var userMentor=false;
  var userMentee=false;
  var mentorProfile=false;
  var userProfile=false;
  if(!username && user.role==="Mentor"){
    userMentor=true;
  }
  if(!username && user.role==="User"){
    userMentee=true;
  }

  if(username&&user.role==="Mentor"){
    mentorProfile=true;
  }
  if(username&&user.role==="User"){
    userProfile=true;
  }

  ///
  console.log(user.mentors)
  return (
    <div className= "">
      <div className=" mb-3 is-justify-content-center ">
        <h2 className="bg-secondary is-black-bis p-3 profileTitle mb-3 has-text-centered">
          Viewing {username ? `${user.username}'s` : 'your'} profile-{user.username}.
        </h2>
        
        <div className='textClass'>
        <div className='card-header-title has-text-black is-flex'>
        <h4>About:</h4>
        </div>
        <section className='card-content mb-3'>{user.aboutText ? `${user.aboutText}` : 'No about listed.'}</section>
        </div>
        
        {/* if the user is a Mentor looking at their own profile */}
        {userMentor &&
          <>
          <h4>Update your about:</h4>
          <div className="col-12 mb-3">
            <AboutForm _id={user._id}/>
          </div>
          <div className="col-12 mb-3">
          <h4>Add a Wisdom:</h4>
            <WisdomForm></WisdomForm>
          </div>
            <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
               <WisdomList
                wisdoms={wisdomsArr}
                username={user.username}
                topic="everything"
              />

          </div>
          </>  
        }

        {/* if the user is a Mentee looking at their own profile */}
        {userMentee &&
          <>
          
          <div className="col-12 mb-3">
            <AboutForm _id={user._id}/>
          </div>

          <div className>
            
            <div className="col-12 mb-3 textClass p-3">
              <h4 className='is-justify-content-left'>Your Mentors:</h4>
              {user.mentors && (user.mentors).map(mentor => (
                <button className="btn w-100 display-block mb-2" key={mentor._id}>
                  <Link to={`/profile/${mentor.username}`}>{mentor.username}</Link>
                </button>
              ))}
            </div>    
          </div>
          </>  
        }
      </div>


        {/* looking at a mentor profile */}
        {mentorProfile&& 
          <div className="col-12 col-lg-3 mb-3">
              <button className="btn ml-auto" onClick={handleClick}>
                  Add Mentor
              </button>
              <WisdomList
                wisdoms={wisdomsArr}
                username={user.username}
                topic="everything"
              />
          </div> 
          }
          
          {/*  looking at a user profile  */}
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
      </div> 
      
  );
};

export default Profile;
