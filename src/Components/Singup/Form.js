import React, { useState } from "react";
import { TextField, Grid, Button, Avatar, Link } from "@material-ui/core";
import { validateEmail } from "../../helpers/authHelper";
export default ({ submitHandler, classes }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ message: "", isError: false });

  const emailHandling = (value) => {
    setEmail(value);
    if (!validateEmail(value)) {
      setError({
        message: "Invalid email",
        isError: true,
      });
    } else{
    setError({message:'', isError: false})
  }
  };
  const validateForm = ()=>{
      return (!firstName || !lastName || !email || !password || error.isError)
  }
  return (
    <form
      onSubmit={(e) => submitHandler(e)}
      className={classes.form}
      noValidate
    >
      <TextField
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
        id="first_Name"
        label="First Name"
        name="firsName"
        autoComplete="firstName"
        autoFocus
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required={true}
        fullWidth
        id="last_Name"
        label="Last Name"
        name="lasttName"
        autoComplete="lastName"
        autoFocus
        onChange={(e) => {
          setLastName(e.target.value);
        }}
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
        helperText={error.message}
        error={error.isError}
        onChange={(e) => {
          emailHandling(e.target.value);
        }}
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
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={validateForm()}
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
