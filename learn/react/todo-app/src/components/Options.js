import React from 'react';

export default class Options extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.addTodo}>
                    <input name="todo" type="text"/>
                    <button>Add Todo</button>
                </form>
                <div>
                    <h3>Options</h3>
                    <button onClick={this.props.removeAllTodos}>Remove All</button>
                </div>
                <div>
                    {
                        this.props.state.options.map((option, index) => (
                            <p key={index+1}>{index+1}. <span>{option}</span><button onClick={this.props.removeTodo}>Remove</button></p>
                            
                        ))
                    }
                </div>
            </div>            
        )
    }
}