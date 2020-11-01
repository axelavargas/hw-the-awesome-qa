import { createSelector } from "@reduxjs/toolkit";
import { SortOptions } from "./QuestionsAnswersSlice";

const questionsById = state => state.questions.questionsById;
const questionsAllIds = state => state.questions.questionsAllIds;
export const selectSortedBy = state => state.questions.sortOption;

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

export const selectSortedQuestions = createSelector(
  selectAllQA,
  selectSortedBy,
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
