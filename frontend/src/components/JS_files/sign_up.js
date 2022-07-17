import React,{ Component } from "react";
// import Button from "bootstrap/js/src/button";
import "../CSS_files/sign_up.css";

export default class SignUp extends Component {
    constructor(props) {
        super();
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        }


    }
    render() {
        return (

            <div className="signup-form">
                <form action="/examples/actions/confirmation.php" method="post">
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <div className="form-group">
                        <div className="row">
                            <div className="col"><input type="text" className="form-control" name="first_name"
                                                        placeholder="First Name" required="required"/></div>
                            <div className="col"><input type="text" className="form-control" name="last_name"
                                                        placeholder="Last Name" required="required"/></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" name="email" placeholder="Email"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password"
                               required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" name="confirm_password"
                               placeholder="Confirm Password" required="required"/>
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
