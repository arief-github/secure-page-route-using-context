import { useState } from "react";
import useSecurity from "../../hooks/useSecurity";

const Login = () => {
  const { login } = useSecurity();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <div>
      <h1>Login Page</h1>

      <p>Kamu harus login terlebih dahulu</p>

      <label htmlFor="username">Username : </label>
      <input
        id="username"
        name="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <label htmlFor="password">Password : </label>
      <input
        id="password"
        name="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={() => login(username, password)}>Login</button>
    </div>
  );
};

export default Login;
