import React, { useState } from "react";
import { validateEmail } from "../../../../../bootcamp weekly/UTSA-VIRT-FSF-PT-01-2023-U-LOLC/weekly-content/20-React/01-Activities/16-Stu_React-Forms/Solved_/src/utils/helpers";

export default function Contact() {
  //state variable setup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [status, setStatus] = useState('Submit');

  //handInputChange event arrow function
  const handleInputChange = (e) => {
    //value variables
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //state setter if statement
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue)
    }
  };

  //handleFormSubmit async arrow function
  const handleFormSubmit = async (e) => {
    //preventing page refresh
    e.preventDefault();
    //validate email if statement incase an invalid email is entered
    if (!validateEmail(email)) {
      //Error message for invalid input
      return setErrorMessage('Email or name is invalid');
    }

    //Arrange input data into JSON format
    const { name, email, message } = e.target.elements;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(data);

    //fetch POST to localhost (email send)
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data)
    });
    setStatus('Submit');
    //results
    const result = await response.json;
    console.log(result);

    //Clear fields after post
    setName('');
    setEmail('');
    setMessage('');
  }
    

  return (
    <div>
      {/* form */}
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
          value={name} 
          type='text' 
          id="name"
          placeholder="name" 
          required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
          value={email} 
          type='email' 
          id="email"
          placeholder="email"
          required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <input 
          value={message} 
          type='text' 
          id="message"
          placeholder="message" 
          required />
        </div>
        <button type='submit'>{status}</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}