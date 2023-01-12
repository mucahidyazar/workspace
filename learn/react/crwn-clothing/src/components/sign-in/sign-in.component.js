import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
        this.setState({ email: '', password:'' });
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name] : value }); //Aslinda buradaki name state 'deki email veya password oluyor. Formdaki inputlarin kullanimina gore. Extra 2 tane ayri fonksiyon yerine tek fonksiyon yaziyoruz. Isterseniz email ve pasword icin ayri ayri yazin.
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email"
                    name="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required
                    />
                    <FormInput 
                    type="password"
                    name="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label='password'
                    required
                    />
                    <div className="buttons">                    
                        <CustomButton 
                        type="submit"
                        > Sign In </CustomButton>
                        <CustomButton 
                        onClick={signInWithGoogle}
                        isGoogleSignIn
                        > Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}