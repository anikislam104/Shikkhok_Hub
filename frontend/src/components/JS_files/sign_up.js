import React,{ Component } from "react";
// import Button from "bootstrap/js/src/button";
import "../CSS_files/sign_up.css";
import axios from "axios";
// import {useState} from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.onChangeFirstName= this.onChangeFirstName.bind(this);
        this.onChangeLastName= this.onChangeLastName.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangeConfirmPassword= this.onChangeConfirmPassword.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
        }
    }

    onChangeFirstName = (e) => {
        this.setState({
            first_name: e.target.value
        });
    }

    onChangeLastName = (e) => {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onChangeConfirmPassword = (e) => {
        this.setState({
            confirm_password: e.target.value
        });
    }

    async onSubmit(e) {
        e.preventDefault();
        const formData= new FormData();
        formData.append("first_name", this.state.first_name);
        formData.append("last_name", this.state.last_name);
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        formData.append("confirm_password", this.state.confirm_password);
        for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }
        axios.post("http://localhost:8080/api/v1/user", formData)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }
    render() {
        return (

            <div className="signup-form">
                <form  method="post" onSubmit={this.onSubmit} encType="multipart/form-data">
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div className="form-group">
                        <div className="row">
                            <div className="col"><input type="text" className="form-control" name="first_name"
                                                        placeholder="First Name" required="required" onChange={this.onChangeFirstName} value={this.state.first_name}/></div>
                            <div className="col"><input type="text" className="form-control" name="last_name"
                                                        placeholder="Last Name" required="required" onChange={this.onChangeLastName} value={this.state.last_name}/></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email"
                               required="required" onChange={this.onChangeEmail} value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password"
                               required="required" onChange={this.onChangePassword} value={this.state.password}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="confirm_password"
                               placeholder="Confirm Password" required="required" onChange={this.onChangeConfirmPassword} value={this.state.confirm_password}/>
                    </div>
                    <div className="form-group">
                        <label className="form-check-label"><input type="checkbox" required="required"/> I accept the
                            Terms of Use &amp; Privacy Policy</label>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? Sign in</div>
            </div>
        );
    }
}
