import React, { Component } from 'react';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.prs.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        prs: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: (name, age) => dispatch({
            type: actionTypes.ADD_PERSON,
            name,
            age
        }),
        personDeletedHandler: (id) => dispatch({
            type: actionTypes.REMOVE_PERSON,
            personId:id
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);