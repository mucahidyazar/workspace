import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const TodoNav = (props) => {
    return (
        <div className="TodoNav">
            <div className="TodoNavbar">
                <Link to='/archive'>
                    Archive
                    <i class="fas fa-tasks">
                        <span className="ArchiveTaskCount">
                            {props.main.todoArchive.length}
                        </span>
                    </i>
                </Link>
            </div>
            <div className="TodoBrand">
                Advance Todo List
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    main: state.main
});

export default connect(mapStateToProps)(TodoNav);
