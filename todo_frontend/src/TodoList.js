import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from './actions/todos';

const TodoList = ({todos, removeTodo, toggleTodo}) => {
    return (
        <ul>
            {todos.map(t => 
                (<li key={t.id} >
                    Item #{t.id}: {t.item} | 
                    <span onClick={() => toggleTodo(t.id)}> Status: {t.complete ? 'Pronto' : 'A Fazer'} </span> |
                    <span onClick={() => removeTodo(t.id)}> Excluir </span>
                </li>)
            )}
        </ul>
    );
}

const mapStateToProps = state => ({todos: state.todos})

export default connect(mapStateToProps, {removeTodo, toggleTodo})(TodoList);