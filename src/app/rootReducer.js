import { combineReducers } from "@reduxjs/toolkit";

import questionsReducer from "../features/questions-answers/QuestionsAnswersSlice";

const rootReducer = combineReducers({
  questions: questionsReducer
});

export const rootState = rootReducer;

export default rootReducer;
