import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ABOUT } from '../../utils/mutations';
import { QUERY_ME,QUERY_ABOUT } from '../../utils/queries';

const AboutForm = () => {
    
    const [aboutText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const handleChange = event => {
        if (event.target.value.length <= 280) {
          setText(event.target.value);
          setCharacterCount(event.target.value.length);
        }
      };
      
      const [addAbout, { error }] = useMutation(ADD_ABOUT, {
        update(cache, { data: { addAbout } }) {
      
            // could potentially not exist yet, so wrap in a try/catch
          try {
            // update me array's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
              query: QUERY_ME,
              data: { me: { ...me, about: [...me.about, addAbout] } },
            });
          } catch (e) {
            console.log(e)
          }
      
          // update thought array's cache
          const { about } = cache.readQuery({ query: QUERY_ABOUT });
          cache.writeQuery({
            query: QUERY_ABOUT,
            data: { thoughts: [addThought, ...thoughts] },
          });
        }
      });
      
      const handleFormSubmit = async event => {
        event.preventDefault();
      
        try {
          // add thought to database
          await addThought({
            variables: { thoughtText }
          });
      
          // clear form value
          setText('');
          setCharacterCount(0);
        } catch (e) {
          console.error(e);
        }
      }; 
  return (

    <div>
        <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
        </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <textarea
        placeholder="Here's a new thought..."
        value={thoughtText}
        className="form-input col-12 col-md-9"
        onChange={handleChange}
        ></textarea>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;