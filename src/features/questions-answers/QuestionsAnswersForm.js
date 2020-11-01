import React from "react";
import {useDispatch } from "react-redux";

import QForm from "../../components/question-answer/QForm";
import { addNewQuestion } from "./QuestionsAnswersSlice";

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

export default QuestionsAnswersForm;
