import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, toggleTodo } from './actions/todos';

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    return (
        <ul>
            {todos.map(t => 
                (<li key={t.id} >
                    Tarefa #{t.id}: {t.item} | 
                    <span onClick={() => dispatch(toggleTodo(t.id))}> Status: {t.complete ? 'Pronto' : 'A Fazer'} </span> | 
                    <span onClick={() => dispatch(removeTodo(t.id))}> Excluir </span>
                </li>)
            )}
        </ul>
    );
}

export default TodoList;