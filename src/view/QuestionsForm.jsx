import React, { useState } from "react";

function QuestionsForm(props) {
  const [form, setForm] = useState({
    title: "",
    question: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // requête API
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Titre: </label>
        <input type="text" name="title" onChange={handleChange} />
        <label>Entrez votre question: </label>
        <textarea name="question" rows="3" cols="30" onChange={handleChange} />
        <button>Validez!</button>
      </form>
    </div>
  );
}

export default QuestionsForm;
