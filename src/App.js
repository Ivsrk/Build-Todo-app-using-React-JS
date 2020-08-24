import React,{useState} from 'react';
import Todo from './Todo.js';
import { Button } from '@material-ui/core'
import {FormControl, Input, InputLabel} from '@material-ui/core';

import './App.css';

function App() {

  const [todos, setTodos] = useState(['ToDo 1 - Get Out from here','ToDo 2 - Come Back'])
  const [input, setInput] = useState('')
  console.log(input)
  const addTodo = (event)=>{
    event.preventDefault()
    console.log("I am Working")
    setTodos([...todos,input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>TODO APP</h1>
        <FormControl>
          <InputLabel>Add your Tasks!!!!</InputLabel>
          <Input value = {input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type='submit' onClick= {addTodo} variant="contained" color="primary">
          Add TODO Task
        </Button>      
        
      
      <ul>
        {todos.map(todo => (
           <Todo text={todo}></Todo>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
