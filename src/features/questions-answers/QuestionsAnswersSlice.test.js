import questionsAnswers, {
  addNewQuestion,
  loadingQuestionsSuccess
} from "./QuestionsAnswersSlice";

const initialState = {
  questionsById: {},
  questionsAllIds: [],
  error: null,
  isLoading: false
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
});
