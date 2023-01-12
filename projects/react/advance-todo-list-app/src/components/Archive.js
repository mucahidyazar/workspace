import React from 'react';
import { connect } from 'react-redux';
import './Archive.scss';
import ArchiveHeader from './ArchiveHeader/ArchiveHeader';
import ExampleTask from './TodoMenu/ExampleTask/ExampleTask';

const Archive = (props) => {
    return (
        <div className="Archive">

            <ArchiveHeader />

            {
                props.main.todoArchive
                ? props.main.todoArchive.map( Task => <ExampleTask key={Task.id} id={Task.id} task={Task.task} who={Task.who} /> )
                : null
            }
            
        </div>
    );
}

const mapStateToProps = (state) => ({
    main: state.main
})

export default connect(mapStateToProps)(Archive);
