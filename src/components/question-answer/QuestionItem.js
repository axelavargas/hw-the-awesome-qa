import React from "react";
import PropTypes from "prop-types"; // ES6

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: "none",
    border: "1px solid #ccc"
  },
  heading: {
    color: "#424242",
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold
  },
  delete: {
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.text.secondary
    }
  }
}));

function QuestionItem({ qaItem, onDeleteQuestion }) {
  const classes = useStyles();

  return (
    <>
      <Grid container justify="space-around">
        <Grid item xs={11}>
          <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                {qaItem.question}
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{qaItem.answer}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
        <Grid item xs={1}>
          <span
            className={classes.delete}
            onClick={() => onDeleteQuestion(qaItem.id)}
          >
            <DeleteIcon />
          </span>
        </Grid>
      </Grid>
    </>
  );
}

QuestionItem.defaultProps = {
  qaItem: { question: null, answer: null, id: null }
};

QuestionItem.propTypes = {
  qaItem: PropTypes.object,
  onDeleteQuestion: PropTypes.func.isRequired
};

export default QuestionItem;
