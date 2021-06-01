import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email:
          <input
            type="email"
            name="mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        ()
        <label>
          Password :
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
}

export default Login;
