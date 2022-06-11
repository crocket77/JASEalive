import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_WISDOMS, QUERY_USERS } from '../utils/queries';
import UserList from '../components/UserList';
import WisdomList from '../components/WisdomList';
import Auth from '../utils/auth';

const WisdomBoard = (props) => {
  const { username: userParam } = useParams();
  //query destructures loading and data
  const { loading, data } = useQuery(QUERY_USERS);
  // This is how you declare two queries. destructure loading/data but rename.
  const { loading:wisdomLoading, data:wisdoms } = useQuery(QUERY_WISDOMS);
  //state hook for topic selection
  const [topic, setTopic] = useState("everything");

  if (loading||wisdomLoading) {
    return <div>Loading...</div>;
  }

  var wisdomsArr=wisdoms.wisdoms
  // const { loading, data } = useQuery(userParam ? QUERY_USERS : QUERY_ME, QUERY_MENTOR, {  // ADDED QUERY_MENTOR HERE
  //   variables: { username: userParam },
  // });
  // const user = data?.me || data?.user || data?.mentor || {};  // ADDED data?.mentor HERE

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
    wisdomsArr = wisdomsArr.filter(wisdoms => wisdoms.topic === topic)
  }

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/board" />;
  }

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

      <select                
                className="form-input"
                name="interest"
                type="interest"
                id="interest"
                onChange={handleTopicChange}>
                <option value="coding">Coding</option>
                <option value="music">Music</option>
                <option value="gaming">Gaming</option>
                <option value="fitness">Fitness</option>
                <option value="finance">Finance</option>
                <option value="parenting">Parenting</option>
                <option value="everything">Everything</option>
        </select>
        <div  className='pl-9 textClass p-3'>
            <h2 className='title2 has-text-black has-text-weight-medium'>Mentor Wisdom:</h2>
            <WisdomList wisdoms={wisdomsArr} interest={topic}></WisdomList>
        </div> 
        </>
  );
};

export default WisdomBoard;
