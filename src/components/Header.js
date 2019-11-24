import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  toolbar: {
    marginBottom: theme.spacing(1),
  }
}));
function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.toolbar} position="static">
      <ToolBar>
        <Typography variant="h4">The Awesome QA Tool</Typography>
      </ToolBar>
    </AppBar>
  );
}

export default Header;
