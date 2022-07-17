import React,{ Component } from "react";
import { Link } from "react-router-dom";
import "../CSS_files/navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">Shikkhok<b>Hub</b></Link>
                    <button type="button" className="navbar-toggler" data-toggle="collapse"
                            data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link">Home</Link>
                            <Link to="/" className="nav-item nav-link">About</Link>

                            <Link to="/sign_up" className="nav-item nav-link">Sign Up</Link>
                            <Link to="/" className="nav-item nav-link active">Log In</Link>
                            <Link to="/" className="nav-item nav-link">Contact</Link>
                        </div>



                    </div>
                </nav>

            </div>
        );
    }
}
