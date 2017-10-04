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
            username: this.usernameInput.value,
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
                                        <label htmlFor="usernameInput">Login :</label>
                                        <input type="text" className="form-control" id="usernameInput"
                                               ref={(input) => this.usernameInput = input}
                                               placeholder="Login"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="passwordInput">Password :</label>
                                        <input type="text" className="form-control" id="passwordInput"
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