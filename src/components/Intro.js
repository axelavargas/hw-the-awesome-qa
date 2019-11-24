import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    width: "100%"
  }
}));

function Intro() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h5">Welcome, </Typography>

      <Typography variant="h6">
        Here you can find all the questions that will help you in the future,
        feel free to add your own questions
      </Typography>
    </div>
  );
}

export default Intro;
