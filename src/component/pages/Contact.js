import React, { useState } from "react";

export default function Contact() {
  //state variable setup
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //handInputChange event arrow function
  const handleInputChange = (e) => {
    //value variables
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //state setter if statement
    if (inputType === 'name') {
      
    }
  }
  //handleFormSubmit async arrow function
    //validate email if statement
    //check password if statement
    //fetch POST to localhost (email send)
    //results

  return (
    <div>
      {/* form */}
      <form ></form>
    </div>
  )
}