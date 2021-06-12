import React from "react";

import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({displayName: "", email: "", password: "", confirmPassword: ""});
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with email and password</span>
                
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Display Name"
                        handleChange={this.handleChange}
                        name="displayName"
                        type="text"
                        value={this.state.displayName}
                        required
                    />
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
                    <FormInput
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        name="confirmPassword"
                        type="password"
                        value={this.state.confirmPassword}
                        required
                    />

                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;