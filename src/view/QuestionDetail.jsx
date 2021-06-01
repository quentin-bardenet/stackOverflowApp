import React from "react";

function QuestionDetail(props) {
  const answers = [
    {
      id: 1,
      answerText:
        "Bonjour, je ne comprends pas JS. Vous pouvez m'en dire plus ?",
    },
    {
      id: 2,
      answerText:
        "Bonjour, je ne comprends pas PHP. Vous pouvez m'en dire plus ?",
    },
    {
      id: 3,
      answerText:
        "Bonjour, je ne comprends pas React. Vous pouvez m'en dire plus ?",
    },
    {
      id: 4,
      answerText:
        "Bonjour, je ne comprends pas un border radius? Cela me gêne.",
    },
  ];

  return (
    <div>
      <h1>title</h1>
      <button>+</button>
      <p>Compteur</p>
      <button>-</button>
      <div>
        <p>Text question</p>
      </div>
      <div>
        {answers.map((answer, index) => (
          <p key={index}>{answer.answerText}</p>
        ))}
      </div>
    </div>
  );
}
export default QuestionDetail;

{
  /* Affichage d'une questions et des réponses associées */
}

{
  /* title question */
}
{
  /* text question */
}
{
  /* nb de vote question */
}

{
  /*Liste des réposnes */
}
{
  /* isRightAnswer */
}
{
  /* nb vote */
}
{
  /* text answer */
}
{
  /* nom de l'auteur */
}
