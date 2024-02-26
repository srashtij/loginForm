import { useState } from 'react';
import './Form.css';
import Input from '../Input/Input';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInEmail, setLoggedInEmail] = useState('');

  function handleSubmit() {
   
    if (email === "tanchuitextile@gmail.com") {
      setLoggedInEmail(email);
      setEmail('');
      setPassword('');
    } else {
      window.alert("Entered email is wrong.");
    }
    return false; 
  }

  return (
    <div className="form-container">
      {loggedInEmail ? (
        <div className="welcome-page">
          <h2>Welcome {loggedInEmail}!</h2>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" id="email"label="Email" value={email} setValue={setEmail} required   />
          <Input type="password" id="password"label="Password"value={password}setValue={setPassword}required />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Form;
