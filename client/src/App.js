import axios from 'axios';
import React, { useState } from 'react';

const YourComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    
      const response=await axios.post("http://localhost:2000/home",{email,password})

      const data =  response.data
      console.log(data)

      if (!data) {
        setError(null);
      } else {
        setError(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    {error?error.mail:""}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br/>
          {error?error.pass:""}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;
