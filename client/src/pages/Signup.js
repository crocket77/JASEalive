import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import './assets/Signup.css';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);
  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main id='container' className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card card-media-margin-2rems">
          <h4 className="card-header ">SIGN UP </h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="username"
                id="username"
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="password"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <p className='has-text-centered'>Mentee or Mentor?</p>
              <select                
                className="form-input"
                name="role"
                type="role"
                id="role"
                value={formState.role}
                onChange={handleChange}>
                <option value="User">Mentee</option>
                <option value="Mentor">Mentor</option>
              </select>
              
              <p className='has-text-centered'>What is your main interest?</p>
              <select                
                className="form-input"
                name="interest"
                type="interest"
                id="interest"
                value={formState.interest}
                onChange={handleChange}>
                <option value="coding">Coding</option>
                <option value="music">Music</option>
                <option value="fitness">Fitness</option>
                <option value="finance">Finance</option>
                <option value="parenting">Parenting</option>
                <option value="everything">Everything</option>
              </select>
              
               
              <div className='px-auto'>
                <button className="btn d-block w-100 h-10 button is-light button is-rounded" type="submit">
                  Submit
                </button>
              </div>
            </form>

            {error && <div>Signup failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
