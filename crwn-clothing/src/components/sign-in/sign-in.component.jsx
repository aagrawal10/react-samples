import React from "react";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: "", password: ""});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    signinWithGoogle = () => {
        console.log("Signin with google called");
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        handleChange={this.handleChange}
                        name="email"
                        type="email"
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        label="Password"
                        handleChange={this.handleChange}
                        name="password"
                        type="password"
                        value={this.state.password}
                        required
                    />

                    <div className="buttons">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton onClick={this.signinWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn;