import React from "react";
import { connect, useDispatch } from "react-redux";

import QForm from "../../components/question-answer/QForm";
import { addNewQuestion } from "./QuestionsAnswersSlice";

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
