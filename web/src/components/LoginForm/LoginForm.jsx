import React, {Component} from "react";
import "./loginForm.scss";

export default class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="loginform" className="outer-wrapper">
                <div className="inner-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset-4">
                                <h2 className="text-center">Receipts Manager</h2>
                                <form role="form">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1"
                                               placeholder="Enter email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1"
                                               placeholder="Password"/>
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/>Remember me
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-default">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}