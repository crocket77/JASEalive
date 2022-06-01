import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USERS, QUERY_WISDOMS } from '../utils/queries';
import UserList from '../components/UserList';
import WisdomForm from '../components/WisdomForm';
import Auth from '../utils/auth';
import { BackgroundImage } from "react-image-and-background-image-fade";
import WisdomList from '../components/WisdomList';

const Test = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(QUERY_USERS);
  const { loading:wisdomLoading, data:wisdoms } = useQuery(QUERY_WISDOMS);
  // console.log("query wisdoms ", data)
  const user = data?.me || data?.user || {};

  // const [topic, setTopic] = useState('all');
  // const handleTopicChange = (event) => {
  //   setTopic(event.target.value);
  // }

    // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading||wisdomLoading) {
    return <div>Loading...</div>;
  }

  const wisdomsArr=wisdoms.wisdoms
  console.log(wisdomsArr)

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
      <BackgroundImage
      src="https://source.unsplash.com/random/800x600"
      width="800px"
      height="400px"
      isResponsive
      className="image"
    />
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
        <div>
            <h1>List Of Mentors</h1>
            <UserList usersarr={data.users} role="Mentor"></UserList>  
        </div>
        <div>
          <WisdomForm></WisdomForm>
        </div>
        <div>
        <WisdomList
              wisdoms={wisdomsArr}
              interest="everything"   
        />
        </div>
      </main>
    </>
  );
};

export default Test;

