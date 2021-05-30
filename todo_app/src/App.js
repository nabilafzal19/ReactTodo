import React, { useState,useEffect} from 'react';

import './App.css';

import {Button,FormControl,Input,InputLabel } from '@material-ui/core';

import Todo from './Todo'
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos,setTodos]= useState([]);
  const [input,setInput]= useState('');


  useEffect(() => {
    
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) =>{
    //this will fire an event when we click button
      event.preventDefault(); //prevents page from reloading
     db.collection('todos').add({
       todo: input,
       timestamp:firebase.firestore.FieldValue.serverTimestamp()
     })
      setTodos([...todos, input]);
    setInput(''); //will clear input box
  }
  
  return (
    
    <div className="App">
      <h1>Hey There</h1>
      <form>

      <FormControl>
        <InputLabel>write your ToDo</InputLabel>
      <Input value={input} onChange={event=>setInput(event.target.value)}/>

      </FormControl>
      
      
      <Button disabled={!input} variant="contained" color="primary" onClick={addTodo} type="submit">
  Add Todo
</Button>
      {/* <button type="submit" onClick={addTodo}>Add Todo</button> */}
      </form>
     
   
      <ul>
        {todos.map(todo => 
        <Todo todo={todo} />
          // <li>{todo}</li>
        )}
      
       
      </ul>
    </div>
  );
}

export default App;
