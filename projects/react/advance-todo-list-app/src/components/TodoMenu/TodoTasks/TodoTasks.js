import React from 'react';
import ExampleTask from '../ExampleTask/ExampleTask';
import { connect } from 'react-redux';

const TodoTasks = (props) => {
    return (
        <div className="TodoTasks">
            <div className="TodoTasksInformation">
                <h3>Todo Tasks</h3>
                <h3>{props.main.todoTask.length}</h3>
            </div>
            <hr/>
            {
                props.main.todoTask 
                ? props.main.todoTask.map( Task => <ExampleTask key={Task.id} id={Task.id} task={Task.task} who={Task.who} action='ADD_TODO_DOING' /> )
                : null
            }
        </div>
    );
}

const mapStateToProps = (state) => ({ main:state.main });

export default connect(mapStateToProps)(TodoTasks);
