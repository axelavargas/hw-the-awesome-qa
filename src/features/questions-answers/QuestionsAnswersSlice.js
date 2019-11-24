import { createSlice } from "@reduxjs/toolkit";
const uuidv4 = require("uuid/v4");

export const SortOptions = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING"
};

const initialState = {
  questionsById: {},
  questionsAllIds: [],
  error: null,
  isLoading: false,
  sortOption: SortOptions.ASCENDING
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
        const { question, answer } = action.payload.data;
        if (question && answer) {
          const id = action.payload.id;
          const qa = { question, answer, id };
          state.questionsAllIds.push(qa.id);
          state.questionsById[id] = qa;
        }
        return state;
      },
      prepare(data) {
        return { payload: { data, id: uuidv4() } };
      }
    },
    removeAllQuestions(state, action) {
      //reset state to initial state
      state.questionsAllIds = initialState.questionsAllIds;
      state.questionsById = initialState.questionsById;
      state.error = initialState.error;
      state.isLoading = initialState.isLoading;
    },
    deleteQuestion(state, action) {
      const { id } = action.payload;
      let questionFilteredIds = [];
      let questionByIdFiltered = {};

      questionFilteredIds = state.questionsAllIds.filter(CurrentId => id !== CurrentId);

      questionFilteredIds.map(id => {
        questionByIdFiltered[id] = state.questionsById[id];
        return questionByIdFiltered;
      });

      state.questionsAllIds = questionFilteredIds;
      state.questionsById = questionByIdFiltered;
    },
    
    toggleSortOption(state, action) {
      switch (action.payload) {
        case SortOptions.ASCENDING:
          state.sortOption = SortOptions.DESCENDING;
          break;
        case SortOptions.DESCENDING:
          state.sortOption = SortOptions.ASCENDING;
          break;
        default:
          state.sortOption = SortOptions.ASCENDING;
      }
    }
  }
});

export const {
  loadingQuestionsStart,
  loadingQuestionsSuccess,
  loadingQuestionsFailure,
  addNewQuestion,
  removeAllQuestions,
  toggleSortOption,
  deleteQuestion
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
