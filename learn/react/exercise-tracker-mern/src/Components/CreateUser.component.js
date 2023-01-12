import React from 'react';
import axios from 'axios';

export default class CreateUser extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            username: ''
        }
    }

    onChangeUsername = e => {
        this.setState({username: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        const user = {
            username: this.state.username
        }

        axios.post('http://127.0.0.1:3000/users/add', user)
            .then(res => console.log(res.data))
        
        this.setState({username: ''})
    }


    render() {
        return (
            <div>
                <h1>Create New USer</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username : </label>
                        <input 
                            type="text"
                            required
                            className="form-control"
                            onChange={this.onChangeUsername}
                            value={this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            value="Create User"
                            className="btn btn-primary"
                        />
                    </div>
                </form>
            </div>
        )
    }
}