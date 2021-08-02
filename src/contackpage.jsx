import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ColorTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" style={{ width:"300px",
                                                                textAlign:"center",
                                                                marginTop:"50px",marginBottom:"50px"
                                                                ,marginLeft:"500px"}}>
      <TextField id="standard-secondary" label="Name :" color="secondary" /><br></br>
      <TextField id="standard-secondary" label="Email :" color="secondary" maxRows={5} /><br></br>
      <Button variant="contained" color="secondary">
        Submit
      </Button>
    </form>
  );
}
