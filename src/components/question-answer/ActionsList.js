import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
   
    margin: {
      margin: theme.spacing(0.1)
    }
   
  }));

function ActionsList({ onRemoveQuestions, onSortQuestions }) {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end"    >
      <Button
        variant="outlined"
        color="default"
        size="small"
        className={classes.margin}
        onClick={() => onSortQuestions()}
      >
        sort Questions
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        className={classes.margin}
        onClick={() => onRemoveQuestions()}
      >
        remove All Questions
      </Button>
    </Grid>
  );
}

export default ActionsList;
