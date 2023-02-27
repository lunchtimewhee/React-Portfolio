import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Form() {
  // Create state variables for the fields in the form and set initial values to blank.
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Get name and value of trigger
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Get input box
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Prevent refresh of page when submitted
    e.preventDefault();

    // Check to see if there is a name populated before submitting
    if(!name) {
      setErrorMessage(
        'Name required.'
      );
      return;
    }
    // Check if valid email, if not, display error message at the bottom of page
    if (!validateEmail(email)) {
      setErrorMessage(
        'Email is invalid.'
      );
      return;
      
    }
    // Check to see if message box is populated before submitting
    if (!message) {
      setErrorMessage(
        `Message contents required.`
      );
      return;
    }  
    

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
    setErrorMessage('');
  };

  return (
    <div>
      <p>Please feel free to reach out to me at anthonyrli1994@gmail.com, or via the contact form below.<br></br>
      </p>
      <div className="formContainer">
        <form className="form">
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="name"
            placeholder="Name"
            className="nameInput"
          /> <br></br><br></br>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            className="emailInput"
          /><br></br><br></br>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="Message"
            rows="5"
            cols="30"
            className="textBox"
          /><br></br><br></br>
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        </div>

      </div>
  );
}

export default Form;
