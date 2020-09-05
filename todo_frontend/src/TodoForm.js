import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions/todos';

const TodoForm = ({addTodo}) => {
    let input; 

    const _onSubmit = e => {
        e.preventDefault();
        if(!input.value.trim()) return;
        addTodo(input.value);
        input.value = "";
    }

    return (
        <form onSubmit={_onSubmit}>
            <label>Item</label>
            <input type="text" ref={el => input = el} ></input>
            <button type="submit">ADD</button>
        </form>
    ); 
}

export default connect(null, {addTodo} )(TodoForm);
