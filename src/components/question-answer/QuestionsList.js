import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import QuestionItem from "./QuestionItem";

function QuestionList({ questions }) {
  return (
    <Grid container alignItems="flex-start">
      <Grid item xs={12}>
        <Typography variant="h6">Questions Created</Typography>
      </Grid>
      <Grid item xs={12}>
        {questions.map(question => {
          return <QuestionItem key={question.id} qaItem={question} />;
        })}
      </Grid>
    </Grid>
  );
}

export default QuestionList;
