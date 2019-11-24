import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tooltip from "../tooltip/Tooltip";
import PropTypes from 'prop-types'; // ES6

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2)
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  heading: {
    color: theme.palette.text.primary
  }
}));

function QForm({ onSubmit }) {
  const classes = useStyles();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ question, answer });
    setQuestion("");
    setAnswer("");
  };
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      className={classes.root}
    >
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.heading}>
          <Tooltip text="Here you can create new questions and their answers">
            Create new Question
          </Tooltip>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <TextField
              required
              className={classes.margin}
              id="question"
              label="Question"
              value={question}
              inputProps={{
                "aria-label": "type question",
                autoFocus: true
              }}
              onChange={e => setQuestion(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="question"
              label="Answer"
              value={answer}
              className={classes.margin}
              inputProps={{
                "aria-label": "type answer"
              }}
              onChange={e => setAnswer(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className={classes.margin}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

QForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default QForm;
