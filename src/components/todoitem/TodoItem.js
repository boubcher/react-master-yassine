import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './TodoItem.css'



export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state ={
            todo: this.props.todo,
            editMode: false,
        }
    }
    updateTodo = () => {
        this.props.updateTodo(this.state.todo);
        this.setState({editMode: false});
    }
   
    render() {
        return (
            <div>
                <input className={"input-Cust " + ( this.props.todo.isDone ? "is-done" : "" )} 
                       value={this.state.todo.descreption} 
                       onChange={(event)=>{  this.setState({ todo : {...this.state.todo, descreption: event.target.value} })}}></input>
                <button onClick={this.props.isDoneToggle}>DT</button>
                {
                    !this.state.editMode ? <button onClick={()=>{ this.setState({editMode: true}) }} >Edit</button> : 
                    <button onClick={this.updateTodo} >Update</button>

                }
                <button><Link
                        to={{
                            pathname: "/show",
                            id: this.state.todo.id,
                            descreption: this.state.todo.descreption,
                            done: this.state.todo.isDone ? "Yes" : "No"
                        }}
                    >Show</Link></button>
            </div>
        )
    }
}
