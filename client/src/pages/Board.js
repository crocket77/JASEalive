import React, { useState, Container, List, Card } from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME, QUERY_MENTOR } from '../utils/queries';
// import Auth from '../utils/auth';

const Board = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  const [topic, setTopic] = useState('all');
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  }

  const { mentors } = useQuery(QUERY_MENTOR)

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
    <>
      <main>
        <h1>Mentor Board</h1>
        <div className='flex-row justify-space-between'>
          <div className='about col-12 mb-3 ml-3'>
            <p className='w-100'>
              Here you can find Mentor videos surrounding a plethora of topics! 
            </p>
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
              {/* <Dropdown
                label = "Available Mentor Topics"
                options = {[
                  { label: 'All', value: 'all' },
                  { label: 'Coding', value: 'coding' },
                  { label: 'Fitness', value: 'fitness' },
                  { label: 'Music', value: 'music' },
                  { label: 'Nutrition', value: 'nutrition' },
                  { label: 'Gaming', value: 'gaming' }
                ]}
                value = { topic }
                onChange = { handleTopicChange }
              /> */}
              {/* <label>
                {label}
                <select value={value} onChange={onChange}>
                  {options.map((option) => (
                    <option value={option.value}>{option.label}</option>
                  ))}
                </select>
              </label> */}
              {/* <label>
                Mentor Video Topics
                <select value={value} onChange={handleChange}>
                  <option value="coding">Coding</option>
                  <option value="fitness">Fitness</option>
                  <option value="music">Music</option>
                  <option value="nutrition">Nutrition</option>
                  <option value="gaming">Gaming</option>
                </select>
              </label> */}
            </div>
            <p className='w-100'>
              Recently Added Videos:
            </p>
          </div>
        </div>
        <container>
        <h1>List Of Mentors</h1>
        <list>
          {[mentors].map((mentors) => (
            <card>{mentors}</card>
          ))}
        </list>
      </container>
      </main>

    </>
  );
};

export default Board;
