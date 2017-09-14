import React from 'react';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const { createUser } = this.props;
        const user = {
            login: this.loginInput.value,
            password: this.passwordInput.value
        };
        createUser(user);
    }

    render() {
        return (
            <section id="loginform" className="outer-wrapper">
                <div className="inner-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-sm-offset-4">
                                <h2 className="text-center">Smart Course</h2>
                                <form role="form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Login :</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1"
                                               ref={(input) => this.loginInput = input}
                                               placeholder="Login"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password :</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1"
                                               ref={(input) => this.passwordInput = input}
                                               placeholder="Password"/>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox"/>Remember me
                                        </label>
                                    </div>
                                    <div>
                                        <input type="submit" className="btn btn-default" value="Submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}