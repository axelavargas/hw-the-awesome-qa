import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

import QuestionsList from "../../components/question-answer/QuestionsList";
import ActionsList from "../../components/question-answer/ActionsList";
import {sortedQuestions, sortedBy} from './QuestionAnswersSelectors';

import {
  fetchQuestions,
  removeAllQuestions,
  toggleSortOption,
  deleteQuestion
} from "./QuestionsAnswersSlice";


const mapDispatch = {
  fetchQuestions,
  removeAllQuestions,
  toggleSortOption,
  deleteQuestion
};

const mapStateToProps = state => ({
  questions: sortedQuestions(state),
  sortedBy: sortedBy(state)
});

function QuestionsAnswersList({ questions, sortedBy }) {
  const dispatch = useDispatch();

  function removeAllQA() {
    dispatch(removeAllQuestions());
  }
  function sortQA() {
    dispatch(toggleSortOption(sortedBy));
  }
  function deleteQuestionById(id) {
    dispatch(deleteQuestion({ id }));
  }

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <>
      <QuestionsList
        questions={questions}
        onDeleteQuestion={deleteQuestionById}
      />
      <ActionsList
        onRemoveQuestions={() => removeAllQA()}
        onSortQuestions={() => sortQA()}
      />
    </>
  );
}

export default connect(mapStateToProps, mapDispatch)(QuestionsAnswersList);
