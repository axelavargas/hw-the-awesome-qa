import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import QuestionsList from "../../components/question-answer/QuestionsList";
import ActionsList from "../../components/question-answer/ActionsList";
import {selectSortedQuestions, selectSortedBy} from './QuestionAnswersSelectors';

import {
  fetchQuestions,
  removeAllQuestions,
  toggleSortOption,
  deleteQuestion
} from "./QuestionsAnswersSlice";

function QuestionsAnswersList() {
  const dispatch = useDispatch();
  const sortedQuestions = useSelector(selectSortedQuestions);
  const sortedQuestionsBy = useSelector(selectSortedBy);

  function removeAllQA() {
    dispatch(removeAllQuestions());
  }
  function sortQA() {
    dispatch(toggleSortOption(sortedQuestionsBy));
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
        questions={sortedQuestions}
        onDeleteQuestion={deleteQuestionById}
      />
      <ActionsList
        onRemoveQuestions={() => removeAllQA()}
        onSortQuestions={() => sortQA()}
      />
    </>
  );
}

export default QuestionsAnswersList;
