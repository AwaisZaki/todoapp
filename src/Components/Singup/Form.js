import React from "react";
import {
  TextField,
  Grid,
  Button,
  Avatar,
  Link, 
} from '@material-ui/core';

export default ({ submitHandler, classes }) => {
  return (
    <form onSubmit={(e) => submitHandler(e)} className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="first_Name"
        label="First Name"
        name="firsName"
        autoComplete="firstName"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="last_Name"
        label="Last Name"
        name="lasttName"
        autoComplete="lastName"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item>
          <Link to={"../Component/Login/Login"} href="#" variant="body2">
            {"Already have an account? Login"}
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
