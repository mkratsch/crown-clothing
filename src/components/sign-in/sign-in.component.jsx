import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}
	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};
	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						label='email'
						name='email'
						type='email'
						value={this.state.email}
						required
						handleChange={this.handleChange}
					/>
					<FormInput
						label='password'
						type='password'
						name='password'
						value={this.state.password}
						required
						handleChange={this.handleChange}
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
							Sign In with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
