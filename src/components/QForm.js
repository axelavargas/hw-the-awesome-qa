import React, { useState } from "react";

function QForm({onSubmit}) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (evt) => {
      evt.preventDefault();
      onSubmit({question, answer});
      setQuestion('');
      setAnswer('');

  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Question:
        <input
          type="text"
          value={question}
          onChange={e => setQuestion(e.target.value)}
        />
      </label>
      <label>
        Answer:
        <input
          type="text"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default QForm;