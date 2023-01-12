import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../reducers/actions/actionTypes';
import { 
    ADD_TODO_DOING,
    ADD_TODO_DONE,
    ADD_TODO_ARCHIVE
} from '../../../reducers/actions/index';

const ExampleTask = (props) => {
    return (
        <div className="ExampleTask" onClick={ (e) => {
            const foundedTodoDoing = props.main.todoTask.filter(Task => Task.id === props.id);
            const foundedTodoDone = props.main.todoDoing.filter(Task => Task.id === props.id);
            const foundedTodoArchive = props.main.todoDone.filter(Task => Task.id === props.id);
                if (props.action === actionTypes.ADD_TODO_DOING) {
                    props.dispatch(ADD_TODO_DOING(foundedTodoDoing[0]))
                } else if (props.action === actionTypes.ADD_TODO_DONE) {
                    props.dispatch(ADD_TODO_DONE(foundedTodoDone[0]))
                } else if (props.action === actionTypes.ADD_TODO_ARCHIVE) {
                    props.dispatch(ADD_TODO_ARCHIVE(foundedTodoArchive[0]))
                }
        } }>
            <div className="Task">{props.task}</div>
            <div className="Who">{props.who}</div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps)(ExampleTask);