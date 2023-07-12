import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

/*
07/10 PROGRESS: Add delete question function to button in QuestionItem
*/

function App() {
  const [page, setPage] = useState("List");
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    console.log("App Effect used")
    fetch("http://localhost:4000/questions")
    .then((response) => response.json())
      .then((questions) => setQuestionList(questions));
  }, []);

  function addQuestion(newQuestion) {
    setQuestionList([...questionList, newQuestion]);
  }




  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
        <QuestionForm onSubmitNewQuestion={addQuestion}/> : <QuestionList questions={questionList}/>
      }

    </main>
  );
}

export default App;
