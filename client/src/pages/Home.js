import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  
  return (
    <main>
      <div className='flex-row justify-space-between'>
<<<<<<< Updated upstream
        <div className='about col-12 mb-3 ml-3 has-background-grey-lighter'>
          <h2 className='title2'>What is Life Sherpa:</h2>
            <p className='w-100'>Life Sherpa is a place for you to find somebody to help you through whatever it is you need help with! We seek the best mentors from around the world that
=======
        <div id='box1'className=' container col-12 mb-3 ml-3 is-transparent  has-text-black-bis p-2 pl-9 pb-5'>
         <div  className='pl-9'>
           <h2 className='title2 has-text-black has-text-weight-medium'>What is Life Sherpa:</h2>
            <p className='w-100 has-text-black has-text-weight-medium'>Life Sherpa is a place for you to find somebody to help you through whatever it is you need help with! We seek the best mentors from around the world that
>>>>>>> Stashed changes
            can give you their life experience and help leapfrog you from where you are to where you want to be. Take a look at what our extraordinary list of mentors have to offer. 
            From learning how to sing or play guitar to just having a dad or mom help you think about what you might be missing as you go through life.  
            </p>
            </div> 
        </div>

        <div className='mx-auto pt-5'>
          <Link to={`/board/`}> 
            <button className='button bg-secondary has-text-black-bis button is-light button is-rounded button is-uppercase'> Check out our mentors</button>
          </Link>
        </div>


        <p  id='disclaimer'className='about col-12 mb-3 ml-3 mx-auto has-text-centered is-size-6-mobile mgt-small'>
         
            
         Disclaimer:  Advice from mentors is to be taken at your own risk. 
            
        </p>


      </div>
    </main>
  );
};

export default Home;
