import React, {useState, useEffect} from "react";
//import React from 'react';
import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  const [change, setChange] = useState(false);

  useEffect(() => {return null}, [change]);

  function deleteQuestion(qid) {
    console.log(qid);
    fetch(`http://localhost:4000/questions/${qid}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
        .then(() => {
          const index = questions.findIndex((question) => question.id === qid);
          console.log(index);
          questions.splice(index, 1);
          setChange((change) => !change);
        });
  }

// remember to return <QuestionItem />. Easy to forget since it's in a return itself. 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => {
          return <QuestionItem key={question.id} question={question} onDelete={deleteQuestion}/>})      
        }
      </ul>
    </section>
  );
}

export default QuestionList;
