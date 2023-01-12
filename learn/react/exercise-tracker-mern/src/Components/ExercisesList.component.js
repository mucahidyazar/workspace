import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date.substring(0,10)}</td>
        <td>
            <Link to={'/edit'+ props.exercise._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}} >delete</a>
        </td>
    </tr>
)

export default class ExercisesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            exercises: []
        }
    }

    deleteExercise = id => {
        axios.delete('http://127.0.0.1:3000/exercises/' + id)
            .then(res => console.log(res))
            .catch(err => console.error(err));

        this.setState({
            exercises: this.state.exercises.filter(exercise => exercise._id !== id)
        });
    }

    exercisesList =  () => (
        this.state.exercises.map(currentexercise => (
            <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise.id} />
        ))
    )

    componentDidMount() {
        axios.get('http://127.0.0.1:3000/exercises')
            .then(res => this.setState({exercises: res.data}))
            .catch((err) => console.error(err));
    }

    render() {
        return (
            <div>
                <h2>Logged Exercises</h2>
                <table className='table'>
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>                    
                    </thead>
                    <tbody>
                        { this.exercisesList() }
                    </tbody>
                </table>
            </div>
        )
    }
}