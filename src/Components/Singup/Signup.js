import React, { useState } from "react";
import {
  Container,
  Typography,
  makeStyles,
  TextField,
  Grid,
  Button,
  Avatar,
  CssBaseline,
  Link,
} from "@material-ui/core/";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";
import Form from './Form';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Singup = (props) => {
  console.log(props)
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dto = {
      first_name: e.target.value,
      last_name: e.target.value,
      email: e.target.value,
      password: e.target.value,
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/api/register",
        dto
      );
      if (response) {
          props.history.push('/todo');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sing Up
        </Typography>
        <Form submitHandler={handleSubmit} classes={classes}/>
      </div>
    </Container>
  );
};
export default Singup;
