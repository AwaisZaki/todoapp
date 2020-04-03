import React, { useState, useEffect } from 'react';

import axios from 'axios'
import {
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
  CircularProgress,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const apiUrl =  'http://localhost:3001/api/todo';
export default () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState(['']);
  const [isLoading, setLoader] = useState(true);
  const [error, setError] = useState("")
  const [updateTodo, setUpateTodo] = useState("")
  const [editToggle, setEdit] = useState({
    id: '',
    isEdit: false
  });
  const addItem = async () => {

    if (todo == '') {
      setError("Blank input");
      return;
    }
    const res = await axios.post(apiUrl,
      {
        title: todo,
        description: 'Hellow'
      });
    const listToUpdate = [...list];
    listToUpdate.push(res.data.data);
    setList(listToUpdate);
    setError('');
    setTodo('');
  }
  const deleteItem = (id) => {
    const listToUpdate = list.filter(item => item._id !== id);
    axios.delete(apiUrl, { headers: {}, data: { id: id } })
      .then((res) => {
        console.log(`AAAAAAA ${res}`);
        setList(listToUpdate);
        console.log(listToUpdate)
      });
  }
  const updateInput = e => setTodo(e.target.value);
  const updateHandler = (e) => {
    setUpateTodo(e.target.value)
  }
  const editHandler = (id, item) => {
    setUpateTodo(item)
    setEdit({ id: id, isEdit: true });
  }
  const submitUpdate = async (id) => {

    const res = await axios.put(apiUrl,
      {
        id: id,
        title: updateTodo,
        description: 'Hellow'
      });
    if (res.data.success) {
      const listToUpdate = list;
      const updatedData = listToUpdate.map(item => {
        if (item._id == id) {
          item.title = res.data.data.title;
        }
        return item;
      });
      setList(updatedData);
      setEdit({
        id: id,
        isEdit: false,
      })
    }
  }
  useEffect(() => {
    console.log('useeffect triggerred');
    axios.get(apiUrl)
      .then((res) => {
        console.log(res.data.data);
        setList(res.data.data);
        setLoader(false);
      });

  }, [], [list])
  const renderTodos = list.map((item, i) => {
    if (editToggle.id == item._id && editToggle.isEdit) {
      return (
        <>
          <TextField id="standard-basic" label="Edit" value={updateTodo}
            onChange={e => updateHandler(e)} />
          <Button variant="contained" color="primary" onClick={() => submitUpdate(item._id)}>
            Done
      </Button>
        </>

      )
    } else {
      return (
        <ListItem>
          <ListItemText
            primary={item.title}
            style={{ marginRight: 150 }}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteItem(item._id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton edge="end" aria-label="Edit" onClick={() => editHandler(item._id, item.title)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )
    }
  })
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item >
          <Typography variant="h4" component="h4">
            Todo App
            </Typography>
          <br />
          {error && <p>{error}</p>}
          <TextField id="standard-basic" label="Add Items" value={todo}
            onChange={e => updateInput(e)} />
          <Button variant="contained" color="primary" onClick={() => addItem()}>
            Add
          </Button>
        </Grid>
        <Grid item>
          <List dense={true}>
            {isLoading ? <CircularProgress /> : renderTodos}
          </List>
        </Grid>
      </Grid>
    </Container>
  )
};