import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {todos} from './tasks.json';
// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const Tareas = this.state.todos.map((todo,i) => {
      return(
      <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
              <h5 classname="card-title">{todo.title}</h5>
              <span className="badge badge-pill badge-danger ml-2">{todo.prosity}</span>
          </div>
          <div className="card-body">
            
            <h6 className="card-subtitle mb-2 text-muted">{todo.responsable}</h6>
            <p className="card-text">{todo.description}</p>
            
          </div>
          <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
        </div>
      </div>
      )
    })
    return (
      <div className="App">
         <nav className="navbar navbar-dark bg-dark">
          <a href="" className="text-white">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
          
        </nav>

         <div className="container">
          <div className="row mt-4">
          <div className="col-md-4 text-center">
                
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {Tareas}
              </div>
            </div>
           

          </div>
         </div>
         
      </div>
    );
  }
}

export default App;
