import React from "react";
import { useState } from "react";

function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userInscription = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(userInscription);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label>
          Firstname :
          <input
            type="text"
            name="firstname"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Lastname :
          <input
            type="text"
            name="lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="S'enregistrer" />
      </form>
    </div>
  );
}

export default Register;
