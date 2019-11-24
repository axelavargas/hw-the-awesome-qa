import questionsAnswers, {
  addNewQuestion,
  loadingQuestionsSuccess,
  removeAllQuestions,
  toggleSortOption,
  deleteQuestion
} from "./QuestionsAnswersSlice";

const initialState = {
  questionsById: {},
  questionsAllIds: [],
  error: null,
  isLoading: false,
  sortOption: "ASCENDING"
};

const questionUUID = {
  id: "uuid",
  question: "shall we create test?",
  answer: "yes!"
};

const questionUUID2 = {
  id: "uuid2",
  question: "shall we create another test?",
  answer: "yes!!"
};

const initialStateWithQuestions = {
  ...initialState,
  questionsById: { uuid: questionUUID },
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
        payload: [questionUUID]
      })
    ).toEqual(initialStateWithQuestions);
  });

  it("should handle add new question state", () => {
    const newState = {
      ...initialStateWithQuestions,
      questionsById: {
        uuid: questionUUID,
        uuid2: { id: "uuid2", ...questionUUID2 }
      },
      questionsAllIds: ["uuid", "uuid2"]
    };
    expect(
      questionsAnswers(initialStateWithQuestions, {
        type: addNewQuestion.type,
        payload: {
          data: questionUUID2,
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
      sortOption: "ASCENDING"
    };
    expect(
      questionsAnswers(initialState, {
        type: toggleSortOption.type,
        payload: "DESCENDING"
      })
    ).toEqual(stateDescending);
  });

  it("should toggle sorting to Ascending alphabetically for questions", () => {
    const stateDescending = {
      ...initialState,
      sortOption: "DESCENDING"
    };
    expect(
      questionsAnswers(initialState, {
        type: toggleSortOption.type,
        payload: "ASCENDING"
      })
    ).toEqual(stateDescending);
  });
  it("should delete a question based on id", () => {
    const stateTwoQuestions = {
      ...initialStateWithQuestions,
      questionsById: {
        uuid: questionUUID,
        uuid2: { id: "uuid2", ...questionUUID2 }
      },
      questionsAllIds: ["uuid", "uuid2"]
    };
    expect(
      questionsAnswers(stateTwoQuestions, {
        type: deleteQuestion.type,
        payload: { id: "uuid2" }
      })
    ).toEqual(initialStateWithQuestions);
  });
});
