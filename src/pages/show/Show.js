import React, { Component } from 'react'
import './Show.css'
export default class Show extends Component {
    render() {
        return (
            <div className="tc div-show">
                <table border="3">
                <tr>
                    <td>Id</td>
                    <td>Descreption</td>
                    <td>Done</td>
                    
                </tr>
                <tr>
                    <td>{this.props.location.id}</td>
                    <td>{this.props.location.descreption}</td>
                    <td>{this.props.location.done}</td>
                    
                </tr>
                </table>
            </div>
        )
    }
}
