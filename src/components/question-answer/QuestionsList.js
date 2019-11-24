import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import QuestionItem from "./QuestionItem";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1)
    },
    emptyList: {
    padding: theme.spacing(2, 1),
    backgroundColor: '#e0e0e0'
  }
}));

function QuestionList({ questions }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} alignItems="flex-start">
      <Grid item xs={12}>
        <Typography variant="h6">Questions Created</Typography>
      </Grid>
      <Grid item xs={12}>
        {!questions.length ? (
          <Paper className={classes.emptyList}>
            <Typography component="p">No questions created</Typography>
          </Paper>
        ) : (
          questions.map(question => {
            return <QuestionItem key={question.id} qaItem={question} />;
          })
        )}
      </Grid>
    </Grid>
  );
}

export default QuestionList;
