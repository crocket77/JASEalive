//not working currently
import { VariablesAreInputTypesRule } from 'graphql';
import React from 'react';
import { Link } from 'react-router-dom';

const DropdownList = ({usersarr, role}) => {

<>
              <select                
                className="form-input"
                name="interest"
                type="interest"
                id="interest"
                onChange={handleChange}>
                <option value="coding">Coding</option>
                <option value="music">Music</option>
                <option value="gaming">Gaming</option>
                <option value="fitness">Fitness</option>
                <option value="finance">Finance</option>
                <option value="parenting">Parenting</option>
                <option value="everything">Everything</option>
              </select>
<div className='tile is-parent flex-row justify-space-around mb-3'>
      <div className='about col-12 mb-3 justify-space-around textClass'>
          <h4 className='p-3  w-100'>Select a topic:</h4>
        <div className="dropdown is-hoverable mb-3">
              <div className="dropdown-trigger">
                <button className="btn bg-secondary w-100 is-black-bis ml-3" aria-haspopup="true" aria-controls="dropdown-menu2">
                  <span>Topics!</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                    {/* could do a map here for dropdown topics */}

                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="coding" className="button is-outlined is-link is-light is-responsive is-fullwidth">Coding</button>
                  </div>
                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="fitness" className="button is-outlined is-link is-light is-responsive is-fullwidth">Fitness</button>
                  </div>
                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="music" className="button is-outlined is-link is-light is-responsive is-fullwidth">Music</button>
                  </div>
                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="finance" className="button is-outlined is-link is-light is-responsive is-fullwidth">Finance</button>
                  </div>
                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="gaming" className="button is-outlined is-link is-light is-responsive is-fullwidth">Gaming</button>
                  </div>
                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="parenting" className="button is-outlined is-link is-light is-responsive is-fullwidth">Parenting</button>
                  </div>
                  <hr className="dropdown-divider"></hr>
                  <div className="dropdown-item">
                    <button onClick={handleTopicChange} value="everything" className="button is-outlined is-primary is-light is-responsive is-fullwidth">Everything</button>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>
    </>
      }

      export default TopicDropdown;