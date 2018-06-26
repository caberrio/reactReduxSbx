import React, {Component} from 'react';
import {ToDo} from  './ToDo';

export class ToDoList extends Component{

    render(){
        return (
            <div className = "">
                <input type="text" value={this.props.state.todo} onChange={this.props.handleInput}/>
                <button onClick={()=>this.props.addTodo()}>Add</button>
                <ul>
                    {this.props.state.list.map( i =>(
                        <ToDo key={i.name} checked={i.state} name={i.name}
                            handleChange={this.props.handleChange}/>
                    ))}

                </ul>
            </div>
        );
    }
}