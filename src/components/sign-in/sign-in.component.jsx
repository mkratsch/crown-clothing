import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from '@firebase/auth';
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
	handleSubmit = async (event) => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await signInWithEmailAndPassword(auth, email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
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
