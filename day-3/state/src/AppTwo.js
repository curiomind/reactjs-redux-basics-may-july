import React from 'react';
import TextField from './TextField';
import Password from './Password';

export default class AppTwo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      isDiabled: true,
    };
  }

  handleChange(event) {
    const key = event.target.getAttribute('id');
    const val = event.target.value;
    this.setState({ [key]: val });
  }

  handleDisable(value) {
    this.setState({ isDiabled: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">With State - Submit Form</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row justify-content-md-center">
            <div className="col-6">
              <TextField
                id="firstname"
                label="First Name"
                placeholder="enter your first name"
                type="text"
                value={this.state.firstname}
                onChange={this.handleChange.bind(this)}
              />
              <TextField
                id="lastname"
                label="Last Name"
                placeholder="enter your last name"
                type="text"
                value={this.state.lastname}
                onChange={this.handleChange.bind(this)}
              />
              <TextField
                id="email"
                label="Email Address"
                placeholder="enter your email address"
                type="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this)}
              />
              <TextField
                id="phone"
                label="Phone #"
                placeholder="enter your phone number"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange.bind(this)}
              />
              <Password
                id="password"
                label="Password"
                placeholder="enter password"
                value={this.state.password}
                password={this.state.confirmPassword}
                onChange={this.handleChange.bind(this)}
                disableStatus={this.handleDisable.bind(this)}
              />
              <Password
                id="confirmPassword"
                label="Confirm Password"
                placeholder="enter password again"
                value={this.state.confirmPassword}
                password={this.state.password}
                onChange={this.handleChange.bind(this)}
                disableStatus={this.handleDisable.bind(this)}
              />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 text-right">
              <div className="row justify-content-md-end">
                <div className="col-auto">
                  <button type="button" className="btn btn-default">
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={this.state.isDiabled}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
