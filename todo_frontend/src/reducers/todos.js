const initialState = [];

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE-TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'TOGGLE-TODO':
            return state.map(todo => 
                (todo.id === action.payload) 
                    ? { ...todo, complete: !todo.complete } 
                    : todo
                ); 
        default:
            return state;
    }
}

export default todos;