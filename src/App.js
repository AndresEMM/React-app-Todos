import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation.js'
import TodoForms from './components/TodoForms.js'
import Post from './components/Posts'
import {db/*,db2*/} from "./firebase/connect"

//console.log(todos);
class App extends Component {
  constructor(){
    super();
    this.state = {
      fb: []
    }
    this.handlerAddTodo = this.handlerAddTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  componentDidMount() {
    const titleRef =  db.ref().child('todos')
    titleRef.on('value', snapshot => {
        this.setState({
            fb: snapshot.val()
        })
    })
  }
  handlerAddTodo(i, todo) {
    this.setState({
      fb: [...this.state.fb, todo]
    });
    db.ref().child('todos').child(i).update(todo)
  }
  removeTodo(index) {
    //console.log(index);
    if(window.confirm("¿Estas seguro de que deseas eliminar esta tarea?")){
      this.setState({
        fb: this.state.fb.filter((e, i) => {
          return i !== index;
        })
      });
      db.ref().child('todos').child(index).remove()
    }
  }
  styleCompleted(id) {
    return {
      fontSize: "20px",
      color: this.state.fb[id].done ? "gray" : "black",
      textDecoration: this.state.fb[id].done ? "line-through" : "none"
    }
  }
  checkDone(index) {
    const newTodos = this.state.fb.map(todo => {
      if(todo.id === index){
        todo.done = !todo.done
      }
      return todo;
    });
    this.setState({todos: newTodos});
    db.ref().child('todos').child(index).update(newTodos[index])
  }
  render(){
    //console.log("Antes de renderizar el componente.")
    const todos = this.state.fb.map((todo) => {
      return(
        <div className="col-md-4" key={todo.id} style={this.styleCompleted(todo.id)}>
          <div className="card mt-4">
            <input type="checkbox"  defaultChecked={todo.done} onChange={this.checkDone.bind(this, todo.id)} />
            <div className="card-header" >
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button
              className="btn btn-danger"
              onClick={this.removeTodo.bind(this, todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      );
    })
    return(
      <div className="App">
      <Navigation t1={"Nav 01"} tasks={this.state.fb.length} /> 
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
          <img src={logo} className="App-logo" alt="logo" />
            <TodoForms 
              onDuplicateTodo={this.removeTodo} 
              onAddTodo={this.handlerAddTodo} 
              todosLenght={this.state.fb.length} 
            />
          </div>
          <div className="col-md-9">
            <div className="row">
            {todos}
            </div>
          </div>
              <Post/>
        </div>
      </div>
      </div>
    );
  }
}
export default App;

