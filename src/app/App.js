import React from "react";
import QuestionsAnswersList from "../features/questions-answers/QuestionsAnswersList";
import QuestionsAnswersForm from "../features/questions-answers/QuestionsAnswersForm";

function App() {
  return (
    <div className="App">
      <QuestionsAnswersForm />
      <QuestionsAnswersList />
    </div>
  );
}

export default App;
