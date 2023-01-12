import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class TodoApp extends React.Component {

    state = {
        options: ['Go to the school at 5 PM', 'Open the lights at 8 PM'],
        error: false,
        shouldToDo: undefined
    }

    addTodo = (e) => {
        e.preventDefault();
        let option = e.target.elements.todo.value.trim();
        option ? this.setState((prevState) => ({ options: prevState.options.concat(option), error:false })) : this.setState(() => ({error: true}))
    }

    removeAllTodos = () => {
        this.setState(() => ({ options: [] }))
    }

    removeTodo = (e) => {
        const removeTodo = e.target.parentElement.children[0].textContent   
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((filteredOption) => filteredOption != removeTodo)
            }
        });
    }

    getTodo = () => {
        const todo = this.state.options[Math.floor(Math.random() * this.state.options.length )]
        todo ? this.setState(() => ({ shouldToDo: todo})) : alert('Please add something to do');
    }

    closeShouldToDo = () => this.setState(() => ({shouldToDo: undefined}));

    render(){
        return (
            <div>
                <Header />
                <Action 
                    getTodo={this.getTodo} 
                />
                {
                    this.state.error ? <p>Please write something to do</p> : null
                }
                <Options 
                    addTodo={this.addTodo}
                    removeAllTodos={this.removeAllTodos}
                    removeTodo={this.removeTodo}
                    state={this.state}
                />
                <OptionModal 
                    shouldToDo={this.state.shouldToDo} 
                    closeShouldToDo={this.closeShouldToDo}
                />
            </div>
        )
    }
}