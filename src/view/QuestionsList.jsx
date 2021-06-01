import React from "react";

function QuestionsList() {
  const questions = [
    {
      title: "what is  ?",
      description: "blablablah",
      nbVote: 24,
      nbAnswer: 2,
      authorName: "Lulu",
    },
    {
      title: "where is  ?",
      description: "blablablah",
      nbVote: 46,
      nbAnswer: 8,
      authorName: "Didi",
    },
    {
      title: "which one is  ?",
      description: "blablablah",
      nbVote: 35,
      nbAnswer: 2,
      authorName: "John",
    },
  ];

  return (
    <div>
      <h1>Welcome on Wild Overflow</h1>
      {questions.map((question, index) => (
        <div key={index}>
          <span>{question.nbVote}</span>
          <span>{question.nbAnswer}</span>
          <p>{question.title}</p>
          <p>{question.authorName}</p>
        </div>
      ))}
    </div>
  );
}
export default QuestionsList;
