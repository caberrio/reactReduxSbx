import React, {Component} from 'react';

export class ToDo extends Component{

    render(){
        return (
            <div className = "">
                <li  key = {this.props.key}>
                    <input type = "checkbox" checked={this.props.checked} onChange={() => this.props.handleChange(this.props.id)}/> <span>{this.props.name}</span>
                </li>
            </div>
        );
    }
}