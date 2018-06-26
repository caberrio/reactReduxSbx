import React, {Component} from 'react';
import {ToDoList} from '../Presentational/ToDoList';

export default class ToDoListContainer extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addTodo = this.addTodo.bind(this);

        this.state = {todo: '', list: [{name: 'correr', state: false, id: 1}, {name: 'Aprender Redux', state: true, id: 2}]}
    }

    componentDidMount(){
    }

    handleChange(id){
        const newList = this.state.list.map(i => {
            if(i.id === id) {
                i.state = !i.state;
            }
            return i;
        });

        this.setState({list: newList});
    }

    handleInput({target}){
        const name = target.value;
        this.setState({todo: name});
    }
    addTodo(){
        const id = this.state.list.length;
        const newList = [...this.state.list, {id:id+1, name: this.state.todo,state:false}];

        this.setState({list: newList});
    }

    render(){
        return(
            <ToDoList state={this.state} handleInput={this.handleInput}
                      addTodo={this.addTodo} handleChange={this.handleChange}/>
        );
    }

}