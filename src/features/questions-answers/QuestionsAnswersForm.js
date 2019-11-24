import React from "react";
import { connect, useDispatch } from "react-redux";

import { addNewQuestion } from "./QuestionsAnswersSlice";
import QForm from "../../components/question-answer/QForm";

const mapDispatch = {
  addNewQuestion
};

function QuestionsAnswersForm() {
  const dispatch = useDispatch();

  function dispatchNewQuestion(question) {
    dispatch(addNewQuestion(question));
  }

  function handleSubmit(question, withDelay = false) {
    if (withDelay) {
      setTimeout(() => {
        return dispatchNewQuestion(question);
      }, 5000);
    } else {
      dispatchNewQuestion(question);
    }
  }

  return <QForm onSubmit={handleSubmit} />;
}

export default connect(null, mapDispatch)(QuestionsAnswersForm);
