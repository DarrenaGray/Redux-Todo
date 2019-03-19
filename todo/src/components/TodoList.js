import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleTodo } from '../actions';

class TodoList extends React.Component {
    state = {
        newTodo: ''
    };


    handleChange = e => {
        console.log('changing')
        this.setState({
            newTodo: e.target.value
        })

    }

    addTodo = e => {
        console.log('click');
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo)
    }

    render() {
        return (
        <>
            <div className="todo-list">
            {this.props.todos.map((todo, id) => (
                <h3 key={id}>
                    {todo.value}
                    {todo.completed}
                </h3>
            ))}

            </div>                
            <input
              type="text"
              value={this.state.newTodo}
              onChange={this.handleChange}
            />
            <button onClick={this.addTodo}>Add todo</button>
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
    todos: state.todos
    }
}

export default connect(mapStateToProps, { addNewTodo, toggleTodo })(TodoList);