import React, { Component } from 'react'
import TodoItem from '../../components/todoitem/TodoItem';


import './Home.css'


const todos = [
    {id: 0, descreption: 'Todo 1', isDone: false},
    {id: 1, descreption: 'Todo 2', isDone: false},
    {id: 2, descreption: 'Todo 3', isDone: false},
    {id: 3, descreption: 'Todo 4', isDone: false},
    {id: 4, descreption: 'Todo 5', isDone: false},
    {id: 5, descreption: 'Todo 6', isDone: false}
];

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            Todos: todos, 
            todoD: null
        }
    }
   addTodo = () =>{
    let todo ={id: 6, descreption: this.state.todoD, isDone: false};
    todos.push(todo);
    this.setState({Todos: todos});
   }
   isDoneToggle = (todo) => {
    const newTodos = this.state.Todos.map(item => {
        if(item.id === todo.id) {
            item.isDone = !item.isDone;
        }
        return item;
    })
    this.setState({todos : newTodos});
    };
    updateTodo = (todo) => {
        const newTodos = this.state.Todos.map(item => {
            if(item.id === todo.id) {
                item.descreption = todo.descreption;
            }
            return item;
        })

        this.setState({todos : newTodos});
    };
    render() {
        return (
            <div className="container">
                <div className="form">
                    <h3>To Do list </h3>
                    
                    <input defaultValue="New.." className="input-cust" onChange={(event)=>this.setState({todoD: event.target.value})}></input>
                    <button onClick={this.addTodo}>+</button>
                    {
                        this.state.Todos.map(item => <TodoItem 
                                                              key={item.id} 
                                                              todo={item}
                                                              isDoneToggle={() => this.isDoneToggle(item)}
                                                              updateTodo={this.updateTodo}
                                                              />)
                    }
                </div>
            </div>
        )
    }
}
