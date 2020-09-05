import api from '../services/api';

export const addTodo = (item) => {
    return (dispatch) => {
        api.post('/todos', {
            item
        }).then(({data}) => {
            dispatch({
                type: 'ADD-TODO',
                payload: {
                    id: data.id,
                    item,
                    complete: 0
                }
            })
        });
    }
}

export const removeTodo = (id) => {
    return {
        type: "REMOVE-TODO",
        payload: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE-TODO',
        payload: id
    }
}
