import React from 'react';

import './AddPerson.css';

export default class addPerson extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: null
        }
    }

    nameChangeHandler = (e) => {
        this.setState(({name: e.target.value}))
    }

    ageChangeHandler = (e) => {
        this.setState(({age: e.target.value}))
    }

    render() {
        return (
            <div className="AddPerson">
                <input 
                    type="text" 
                    onChange={this.nameChangeHandler} 
                    placeholder="Name" />
                <input 
                    type="text" 
                    onChange={this.ageChangeHandler}
                    placeholder="Age" />
                <button 
                    onClick={() => this.props.personAdded(this.state.name, this.state.age)}>
                Add Person</button>
            </div>
        );
    }
}