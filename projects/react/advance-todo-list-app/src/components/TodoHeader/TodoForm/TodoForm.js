import React from 'react';
import { connect } from 'react-redux';
import {
    ADD_TODO_TASK
} from '../../../reducers/actions/index';

const TodoForm = (props) => {
    return (
        <form 
        className="TodoForm"
        onSubmit={ (event) => {
            event.preventDefault();
            props.dispatch(ADD_TODO_TASK(event.target.elements.TodoFormTask.value, event.target.elements.TodoFormWho.value));
            event.target.elements.TodoFormTask.value = '';
            event.target.elements.TodoFormWho.value = '';
        } }>
            <input type="text" name="TodoFormTask" placeholder="What is your task?" />
            <input type="text" name="TodoFormWho" placeholder="Whom?" />
            <button>Add</button>
        </form>
    );
}

const mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps)(TodoForm);
