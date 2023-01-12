import React from 'react';
import ExampleTask from '../ExampleTask/ExampleTask';
import { connect } from 'react-redux';

const TodoDone = (props) => {
    return (
        <div className="TodoDone">
            <div className="TodoTasksInformation">
                <h3>Todo Done</h3>
                <h3>{props.main.todoDone.length}</h3>
            </div>
            <hr/>
            {
                props.main.todoDone
                ? props.main.todoDone.map( Task => <ExampleTask key={Task.id} id={Task.id} task={Task.task} who={Task.who} action='ADD_TODO_ARCHIVE' /> )
                : null
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    main: state.main
});

export default connect(mapStateToProps)(TodoDone);
