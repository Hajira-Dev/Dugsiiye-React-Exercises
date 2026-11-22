// LoginForm.jsx
import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const submitLogin = (event) => {
    event.preventDefault();
    // Fake authentication check
    if (user && pass) {
      setAuthenticated(true);
    }
  };

  const submitLogout = () => {
    setUser("");
    setPass("");
    setAuthenticated(false);
  };

  if (authenticated) {
    return (
      <div>
        <h1>Welcome, {user}!</h1>
        <button onClick={submitLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitLogin}>
      <h2>Login</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
