import React from "react";
import { connect, useDispatch } from "react-redux";

import { addNewQuestion } from "./QuestionsAnswersSlice";

import QForm from '../../components/question-answer/QForm';

const mapDispatch = {
  addNewQuestion
};


function QuestionsAnswersForm() {

  const dispatch = useDispatch();

  function handleSubmit(question) {
    dispatch(addNewQuestion(question));
  }

  return (
      <QForm onSubmit={handleSubmit} />
  );
}

export default connect(null, mapDispatch)(QuestionsAnswersForm);
