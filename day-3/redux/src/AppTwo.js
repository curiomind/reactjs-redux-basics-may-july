import React from 'react';
import { connect } from 'react-redux';
import TextField from './TextField';
import Password from './Password';
import {
  RESET,
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
  SET_PHONE,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_DISABLED,
  submitForm,
} from './store/action';

class AppOne extends React.Component {
  handleFirstNameChange(event) {
    this.props.dispatch({ type: SET_FIRST_NAME, payload: event.target.value });
  }

  handleLastNameChange(event) {
    this.props.dispatch({ type: SET_LAST_NAME, payload: event.target.value });
  }

  handleEmailChange(event) {
    this.props.dispatch({ type: SET_EMAIL, payload: event.target.value });
  }

  handlePhoneChange(event) {
    this.props.dispatch({ type: SET_PHONE, payload: event.target.value });
  }

  handlePasswordChange(event) {
    this.props.dispatch({ type: SET_PASSWORD, payload: event.target.value });
  }

  handleConfirmPasswordChange(event) {
    this.props.dispatch({ type: SET_CONFIRM_PASSWORD, payload: event.target.value });
  }

  handleDisable(value) {
    this.props.dispatch({ type: SET_DISABLED, payload: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(submitForm());
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.dispatch({ type: RESET });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">With State - Button onClick</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="row justify-content-md-center">
            <div className="col-6">
              <TextField
                id="firstname"
                label="First Name"
                placeholder="enter your first name"
                type="text"
                value={this.props.firstname}
                onChange={this.handleFirstNameChange.bind(this)}
              />
              <TextField
                id="lastname"
                label="Last Name"
                placeholder="enter your last name"
                type="text"
                value={this.props.lastname}
                onChange={this.handleLastNameChange.bind(this)}
              />
              <TextField
                id="email"
                label="Email Address"
                placeholder="enter your email address"
                type="email"
                value={this.props.email}
                onChange={this.handleEmailChange.bind(this)}
              />
              <TextField
                id="phone"
                label="Phone #"
                placeholder="enter your phone number"
                type="text"
                value={this.props.phone}
                onChange={this.handlePhoneChange.bind(this)}
              />
              <Password
                id="password"
                label="Password"
                placeholder="enter password"
                value={this.props.password}
                password={this.props.confirmPassword}
                onChange={this.handlePasswordChange.bind(this)}
                disableStatus={this.handleDisable.bind(this)}
              />
              <Password
                id="confirmPassword"
                label="Confirm Password"
                placeholder="enter password again"
                value={this.props.confirmPassword}
                password={this.props.password}
                onChange={this.handleConfirmPasswordChange.bind(this)}
                disableStatus={this.handleDisable.bind(this)}
              />
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col-6 text-right">
              <div className="row justify-content-md-end">
                <div className="col-auto">
                  <button type="button" className="btn btn-default" onClick={this.handleCancel.bind(this)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" disabled={this.props.isDiabled}>
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

const mapStateToProps = (state) => {
  return {
    firstname: state.firstname,
    lastname: state.lastname,
    email: state.email,
    phone: state.phone,
    password: state.password,
    confirmPassword: state.confirmPassword,
    isDiabled: state.isDiabled,
  };
};

export default connect(mapStateToProps)(AppOne);
