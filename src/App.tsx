import { useRef, useEffect } from 'react';
import Header from './Comp/Header/Header.tsx';
import Input from './Comp/Input/Input.tsx';
import './Comp/Input/Input.css';

function App() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const userId = useRef<number>(1);

  useEffect(() => {
    
    const handleLogin = () => {
      userId.current++;
    };
    document.addEventListener('submit', handleLogin);
  }, [userId.current]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const usernameValue = usernameRef.current?.value;
    const passwordValue = passwordRef.current?.value;

    if (usernameValue && passwordValue) {
      alert(`Welcome ${usernameValue}! Your user ID is ${userId.current}`);
    }
  };

  return (
    <>
      <Header />
      <div className="form-container">
        <h1>Login-Form</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" id="username" label="Username" inputRef={usernameRef} />
          <Input type="password" id="password" label="Password" inputRef={passwordRef} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
