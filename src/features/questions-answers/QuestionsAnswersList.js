import React, { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { connect, useDispatch } from "react-redux";
import QuestionsList from "../../components/question-answer/QuestionsList";
import Divider from "@material-ui/core/Divider";

import {
  fetchQuestions,
  removeAllQuestions,
  toggleSortOption,
  SortOptions
} from "./QuestionsAnswersSlice";
import ActionsList from "../../components/question-answer/ActionsList";

const questionsById = state => state.questions.questionsById;
const questionsAllIds = state => state.questions.questionsAllIds;
const sortedBy = state => state.questions.sortOption;

const selectAllQA = createSelector(
  questionsAllIds,
  questionsById,
  (allIds, byId) => {
    let allQA = [];
    if (allIds) {
      allIds.map(id => {
        allQA.push(byId[id]);
        return allQA;
      });
    }
    return allQA;
  }
);

function sortAlphabetically(a, b) {
  if (a.question.toLowerCase() > b.question.toLowerCase()) return -1;
  if (b.question.toLowerCase() > a.question.toLowerCase()) return 1;
  return 0;
}
const sortedQuestions = createSelector(
  selectAllQA,
  sortedBy,
  (questions, sortedBy) => {
    switch (sortedBy) {
      case SortOptions.ASCENDING:
        questions.sort((a, b) => sortAlphabetically(b, a));
        break;

      case SortOptions.DESCENDING:
        questions.sort((a, b) => sortAlphabetically(a, b));
        break;

      default:
        return questions;
    }
    return questions;
  }
);

const mapDispatch = {
  fetchQuestions,
  removeAllQuestions,
  toggleSortOption
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

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  return (
    <>
      <Divider variant="middle" />
      <ActionsList
        onRemoveQuestions={() => removeAllQA()}
        onSortQuestions={() => sortQA()}
      />
      <QuestionsList questions={questions} />
    </>
  );
}

export default connect(mapStateToProps, mapDispatch)(QuestionsAnswersList);
