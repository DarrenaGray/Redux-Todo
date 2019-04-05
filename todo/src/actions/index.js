export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function addNewTodo(newTodo) {
    console.log(newTodo)
    return {
        type: ADD_TODO,
        payload: newTodo
    };
}

export function toggleTodo(id) {
    console.log(id)
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}