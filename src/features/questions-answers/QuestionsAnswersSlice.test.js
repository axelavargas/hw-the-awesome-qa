import questionsAnswers, {
  addNewQuestion,
  loadingQuestionsSuccess,
  removeAllQuestions,
  toggleSortOption
} from "./QuestionsAnswersSlice";

const initialState = {
  questionsById: {},
  questionsAllIds: [],
  error: null,
  isLoading: false,
  sortOption: "ASCENDING"
};

const question = {
  id: "uuid",
  question: "shall we create test?",
  answer: "yes!"
};
const initialStateWithQuestions = {
  ...initialState,
  questionsById: { uuid: question },
  questionsAllIds: ["uuid"]
};

describe("QuestionAnswers reducer", () => {
  it("should handle initial state", () => {
    expect(questionsAnswers(undefined, {})).toEqual(initialState);
  });

  it("should handle get question list state", () => {
    expect(
      questionsAnswers(initialState, {
        type: loadingQuestionsSuccess.type,
        payload: [question]
      })
    ).toEqual(initialStateWithQuestions);
  });

  it("should handle add new question state", () => {
    const newQuestion = {
      question: "shall we create another test?",
      answer: "yes!!"
    };

    const newState = {
      ...initialStateWithQuestions,
      questionsById: { uuid: question, uuid2: { id: "uuid2", ...newQuestion } },
      questionsAllIds: ["uuid", "uuid2"]
    };
    expect(
      questionsAnswers(initialStateWithQuestions, {
        type: addNewQuestion.type,
        payload: {
          data: newQuestion,
          id: "uuid2"
        }
      })
    ).toEqual(newState);
  });

  it("should remove all questions from the state", () => {
    expect(
      questionsAnswers(initialStateWithQuestions, {
        type: removeAllQuestions.type,
        payload: {}
      })
    ).toEqual(initialState);
  });

  it("should toggle sorting to Descending alphabetically for questions", () => {
    const stateDescending = {
        ...initialState,
        sortOption: 'ASCENDING'
    }  
    expect(
      questionsAnswers(initialState, {
        type: toggleSortOption.type,
        payload: 'DESCENDING'
      })
    ).toEqual(stateDescending);
  });

  it("should toggle sorting to Ascending alphabetically for questions", () => {
    const stateDescending = {
        ...initialState,
        sortOption: 'DESCENDING'
    }  
    expect(
      questionsAnswers(initialState, {
        type: toggleSortOption.type,
        payload: 'ASCENDING'
      })
    ).toEqual(stateDescending);
  });
});
