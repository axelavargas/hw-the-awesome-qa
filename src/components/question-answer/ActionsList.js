import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types'; // ES6

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0)
  },
  margin: {
    margin: theme.spacing(0.1, 0.5)
  }
}));

function ActionsList({ onRemoveQuestions, onSortQuestions }) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-start" className={classes.root}>
      <Button
        variant="contained"
        color="default"
        size="medium"
        className={classes.margin}
        onClick={() => onSortQuestions()}
      >
        sort Questions
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        className={classes.margin}
        onClick={() => onRemoveQuestions()}
      >
        remove All Questions
      </Button>
    </Grid>
  );
}

ActionsList.propTypes = {
    onRemoveQuestions: PropTypes.func.isRequired,
    onSortQuestions: PropTypes.func.isRequired,
}

export default ActionsList;
