import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './../actions';

import './TodoList.css';


class TodoList extends React.Component {
    state = {
        newTodo: ''
    }

    handleChange = e => {
        this.setState({
            newTodo: e.target.value
        })
    }

    addTodo = e => {
        console.log(this.state.newTodo)
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            newTodo: ''
        })
    }

    toggleTodo = id => {
        console.log(id);
        this.props.toggleTodo(id);
    }

    deleteTodo = () => {
        this.props.deleteTodo();
    }


    render() {
        return (
            <div className="todo-list">
                <h1>Todo List Redux</h1>
                {this.props.todos.map((todo, index) => (
                    <div className="todo" key={index}>
                        <p className={`todo${todo.completed ? ' done' : ''}`} onClick={() => this.toggleTodo(todo.id)}>
                            {todo.todo}
                            {todo.completed}
                        </p>
                    </div>
                ))}
                <p>{}</p>
                <input 
                    type="text"
                    placeholder="Add todo"
                    value={this.state.newTodo}
                    onChange={this.handleChange}
                />
                <button onClick={this.addTodo}>Add Todo</button>
                <button onClick={() => this.deleteTodo(this.props.todos.id)}>Delete Todo</button>

            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo } )(TodoList);