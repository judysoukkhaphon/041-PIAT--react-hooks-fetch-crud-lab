import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  
  function editQuestion(event) {
    event.preventDefault();
    console.log(id);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        correctIndex: event.target.value
      })
    })
      .then((response) => response.json);
  }
  
  function handleDelete(event) {
    event.preventDefault();
    onDelete(id);
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={editQuestion} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}> Delete Question</button>
    </li>
  );
}

export default QuestionItem;
