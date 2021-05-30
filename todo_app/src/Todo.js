import React from 'react'
import {List,ListItem,ListItemText} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';
function Todo(props) {
    return (
        // <div>
        //     {/* <li>{props.Text}</li> */}
        // </div>
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="AddedList"/>
            </ListItem>
                <DeleteIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} > </DeleteIcon >
        </List>
    )
}

export default Todo
