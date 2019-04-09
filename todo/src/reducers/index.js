import { ADD_TODO, TOGGLE_TODO } from '../actions';


const initialState = {
    todos: [
        {
            todo: 'Clean kitchen',
            completed: false,
            id: 0
        }
    ]
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            console.log('add todo', action);
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        todo: action.payload,
                        completed: false,
                        id: Date.now()
                    }
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            }
        default:
            return state;
    }
}