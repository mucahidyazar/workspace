import React from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:3000/users')
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({
                        users: res.data.map((user) => user.username)
                    })
                }
            });
    }

    onChangeUsername = e => {
        this.setState(() => ({ username: e.target.value }));
    }
    onChangeDescription = e => {
        this.setState({description: e.target.value})
      }
    onChangeDuration = e => {
        this.setState({ duration: e.target.value });
    }
    onChangeDate = date => {
        this.setState(() => ({ date }));
    }

    onSubmit = e => {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        axios.post('http://127.0.0.1:3000/exercises/add', exercise)
            .then(res => console.log(res));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Exercise Log</h3>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label htmlFor="username">Username :</label>
                        <select 
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        >
                            {
                                this.state.users.map((user) => (
                                    <option
                                        key={user}
                                        value={user}
                                    >
                                    {user}
                                    </option>
                                ))
                            }
                        >                            
                        </select>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Desription : </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="duration">Duration (in minutes) : </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={this.state.duration}
                            onChange={this.onChangeDuration}
                        />
                    </div>
                    <div className="fom-group">
                        <label htmlFor="date">Date : </label>
                        <div>
                            <DatePicker 
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                value="Create Exercise Log"
                                className="btn btn-primary"
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}