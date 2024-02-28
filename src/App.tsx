// App.tsx
import { useRef } from 'react';
import Header from './Comp/Header/Header.tsx';
import './Comp/Input/Input.css';

function App() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const usernameValue = usernameRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    if (usernameValue && /\S/.test(usernameValue) && passwordValue && /\S/.test(passwordValue)) {
      alert(`Welcome ${usernameValue}! You are logged in`);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h1>Login-Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" ref={usernameRef} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef} />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
