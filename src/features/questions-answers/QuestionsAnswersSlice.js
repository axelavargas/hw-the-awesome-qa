import { createSlice } from "@reduxjs/toolkit";
const uuidv4 = require("uuid/v4");

const initialState = {
  questionsById: {},
  questionsAllIds: [],
  error: null,
  isLoading: false,
};

function startLoading(state) {
  state.isLoading = true;
}

function loadingFailed(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const QuestionsAnswersSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    loadingQuestionsStart: startLoading,
    loadingQuestionsSuccess(state, action) {
      if (action.payload) {
        action.payload.map(question => {
          const id = question.id;
          state.questionsAllIds.push(id);
          state.questionsById[id] = question;
          state.isLoading = false;
          state.error = null;
          return state;
        });
      }
      return state;
    },
    loadingQuestionsFailure: loadingFailed,
    addNewQuestion: {
      reducer(state, action) {
        const {question, answer } = action.payload.data;
        if (question && answer) {
          const id = action.payload.id;
          const qa = {question, answer, id };
          state.questionsAllIds.push(qa.id);
          state.questionsById[id] = qa;
        }
        return state;
      },
      prepare(data) {
        return { payload: { data, id: uuidv4() } };
      }
    }
  }
});

export const {
  loadingQuestionsStart,
  loadingQuestionsSuccess,
  loadingQuestionsFailure,
  addNewQuestion
} = QuestionsAnswersSlice.actions;

async function getQuestions() {
  const initialQuestion = {
    id: uuidv4(),
    question: "how to add a question",
    answer: "just use the form below"
  };

  return await [initialQuestion];
}

//simulating request from a server
export const fetchQuestions = () => async dispatch => {
  try {
    dispatch(loadingQuestionsStart);
    const questions = await getQuestions();
    dispatch(loadingQuestionsSuccess(questions));
  } catch (err) {
    dispatch(loadingQuestionsFailure(err.toString()));
  }
};

export default QuestionsAnswersSlice.reducer;
