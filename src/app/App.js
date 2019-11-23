import React from "react";
import QuestionsAnswersList from "../features/questions-answers/QuestionsAnswersList";
import QuestionsAnswersForm from "../features/questions-answers/QuestionsAnswersForm";
import Header from "../components/Header";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: '1em'
  },
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Grid container className={classes.root}>
        <QuestionsAnswersList />
        <QuestionsAnswersForm />
      </Grid>
    </div>
  );
}

export default App;
