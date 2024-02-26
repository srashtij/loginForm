// App.tsx

import { useState } from 'react';
import Input from './Comp/Input/Input.tsx'; 
import Header from './Comp/Header/Header.tsx'; 

import './Comp/Input/Input.css'; 

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    if (username === "tanchuitextile" && password === "tanchui123") {
      setLogin(true);
      setUsername("");
      setPassword("");
    } else if (username === "" && password === "") {
      alert("Please enter username and password");
    } else {
      alert("Invalid credentials");
      setLogin(false);
    }
  };

  return (
    <>
     <Header />

      {login ? (
        <div>
          <h2>Login Form</h2>
          <h4>WELCOME {username}</h4>
          <button onClick={() => setLogin(false)}>Logout</button>
        </div>
      ) : (
        <>
       
          <form className="form-container"> {/* Add form-container class */}
          <h1>Login-Form</h1>
            <Input type="text" id="username" value={username} label="Username" onChange={setUsername} />
            <Input type="password" id="password" value={password} label="Password" onChange={setPassword} />
            <button onClick={handleLogin}>Login</button>
          </form>
        </>
      )}
    </>
   
  );
}

export default App;
