import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Dropdown } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

const Board = (props) => {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  const user = data?.me || data?.user || {};

  const [topic, setTopic] = React.useState('coding');
  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  }

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/board" />;
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
  
  return (
    <main>
      <h1>Mentor Board</h1>
      <div className='flex-row justify-space-between'>
        <div className='about col-12 mb-3 ml-3'>
          <p className='w-100'>
            Here you can find Mentor videos surrounding a plethora of topics! 
          </p>
          <div>
            <Dropdown
              label = "Available Mentor Topics"
              options = {[
                { label: 'Coding', value: 'coding' },
                { label: 'Fitness', value: 'fitness' },
                { label: 'Music', value: 'music' },
                { label: 'Nutrition', value: 'nutrition' },
                { label: 'Gaming', value: 'gaming' }
              ]}
              value = { topic }
              onChange = { handleTopicChange }
            />
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
        <div>
          <Link to={`/board/`}> 
            <button className='button bg-secondary has-text-black-bis'>Search!</button>
          </Link>
        </div>
        <div className='about col-12 mb-3 ml-3'>
          <h5>Disclaimer:</h5>
          <p className='w-100'>
            Advice from mentors is to be taken at your own risk. 
          </p>
        </div>


      </div>
    </main>
  );
};

export default Board;
