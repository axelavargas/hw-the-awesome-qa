import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { fetchQuestions } from "./QuestionsAnswersSlice";

const mapDispatch = {
    fetchQuestions,
};

function QuestionsAnswersList() {
  const dispatch = useDispatch();
  const { questionsById, questionsAllIds } = useSelector(
    state => state.questions
  );

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);


  return (
    <>
      My QuestionsAnswers
      <pre>{JSON.stringify(questionsById)}</pre>      
    </>
  );
}

export default connect(null, mapDispatch)(QuestionsAnswersList);
