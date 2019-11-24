import React from "react";
import QuestionsAnswersList from "../features/questions-answers/QuestionsAnswersList";
import QuestionsAnswersForm from "../features/questions-answers/QuestionsAnswersForm";
import Intro from "../components/Intro";
import Header from "../components/Header";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 3),
    width: "90%"
  }
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <Grid container justify="center" className={classes.root}>
        <Intro/>
        <QuestionsAnswersList />
        <QuestionsAnswersForm />
      </Grid>
    </div>
  );
}

export default App;
