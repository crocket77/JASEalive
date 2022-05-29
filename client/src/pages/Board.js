import React, { useState } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_MENTOR } from '../utils/queries';
// import Auth from '../utils/auth';

const Board = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, QUERY_MENTOR, {  // ADDED QUERY_MENTOR HERE
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || data?.mentor || {};  // ADDED data?.mentor HERE

  const [topic, setTopic] = useState('all');
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  }

  // const { mentors } = useQuery(QUERY_MENTOR)


  // navigate to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/board" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to see this. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }
  
  return (
    <div className="tile is ancestor">
      <div className="tile is-3 is-vertical is-parent">
        <h3>List of Current Mentors</h3>
        <div className="tile is-child box">
          {user.filter(user => user.role('Mentor')).map(filteredMentor => (     // ADDED THIS FILTER METHOD HERE, ask about user model for mentor status like line 9
            <h1>{filteredMentor.username}</h1>,  // DOESNT LIKE COMMA HERE
            <p>{filteredMentor.about}</p>
          ))}
        </div>
        <div className="tile is-child box">
          <p>MENTORS GO HERE</p>
        </div>
        <div className="tile is-child box">
          <p>MENTORS GO HERE</p>
        </div>
        <div className="tile is-child box">
          <p>MENTORS GO HERE</p>
        </div>
      </div>
      <div className='tile is-parent flex-row justify-space-between'>
        <div className='about col-12 mb-3 ml-3'>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>Topics!</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu2" role="menu">
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <p>Coding</p>
                </div>
                <div className="dropdown-item">
                  <p>Fitness</p>
                </div>
                <div className="dropdown-item">
                  <p>Music</p>
                </div>
                <div className="dropdown-item">
                  <p>Nutrition</p>
                </div>
                <div className="dropdown-item">
                  <p>Gaming</p>
                </div>
                <hr className="dropdown-divider"></hr>
                <div className="dropdown-item">
                  <p>All</p>
                </div>
              </div>
            </div>
          </div>
          <p className='w-100'>
            Here you can find Mentor videos surrounding a broad range of topics! 
          </p>
        </div>
        <div id='box1'className='container is-fluid col-12 mb-3 ml-3 is-transparent  has-text-black-bis p-2 pl-9 pb-5'>
          <div  className='pl-9'>
            <h2 className='title2 has-text-black has-text-weight-medium'>Mentor Videos</h2>
            <p className='w-100 has-text-black has-text-weight-medium'>
              HERE IS WHERE THE VIDEOS WILL GO MUST FIGURE OUT HOW TO MAKE THIS CONTAINER NOT EXTEND THE LENGTH OF THE PAGE AND INSTEAD ADD
              A SCROLL BAR SHOULD THE AMOUNT OF VIDEOS DISPLAYED EXCEEED THE NORMAL PAGE LIMIT.
            </p>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Board;
