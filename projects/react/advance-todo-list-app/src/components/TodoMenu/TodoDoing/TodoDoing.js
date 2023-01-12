import React from 'react';
import ExampleTask from '../ExampleTask/ExampleTask';
import { connect } from 'react-redux';

const TodoDoing = (props) => {
    return (
        <div className="TodoDoing">
            <div className="TodoTasksInformation">
                <h3>Todo Doing</h3>
                <h3>{props.main.todoDoing.length}</h3>
            </div>
            <hr/>
            {
                props.main.todoDoing
                ? props.main.todoDoing.map( Task => <ExampleTask key={Task.id} id={Task.id} who={Task.who} task={Task.task} action='ADD_TODO_DONE' /> )
                : null
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps)(TodoDoing);
