import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
    todos: [
        {
            value: 'Walk the dog',
            completed: false
          }
    ]
}

export default ( state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log('add todo', action);
            const newTodo = {
                value: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, id) =>
                    action.payload === id 
                    ? { ...todo, completed: !todo.completed && ' completed!' }
                    : todo
                )
            }
        default:
            return state
    }
}