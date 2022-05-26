import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='about col-12 mb-3 ml-3 has-background-grey-lighter'>
          <h2 className='title2'>What is Life Sherpa:</h2>
            <p className='w-100'>Life Sherpa is a place for you to find somebody to help you through whatever it is you need help with! We seek the best mentors from around the world that
            can give you their life experience and help leapfrog you from where you are to where you want to be. Take a look at what our extraordinary list of mentors have to offer. 
            From learning how to sing or play guitar to just having a dad or mom help you think about what you might be missing as you go through life.  
            </p>
        </div>
        <div>
          <Link to={`/board/`}> 
            <button className='button bg-secondary has-text-black-bis'>Check out our mentors</button>
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

export default Home;
