import React from 'react';

export default class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: 'Proloy',
      lastname: '',
      username: '',
      password: '',
    };
  }

  handleChange(event) {
    const key = event.target.getAttribute('id');
    const val = event.target.value;
    this.setState({ [key]: val });
    console.log(key, val);
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First Name"
              onChange={this.handleChange.bind(this)}
              value={this.state.firstname}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastname" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Lastname Name"
              onChange={this.handleChange.bind(this)}
              value={this.state.lastname}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="name@example.com"
              onChange={this.handleChange.bind(this)}
              value={this.state.username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Passwod
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange.bind(this)}
              value={this.state.password}
            />
          </div>
        </div>
      </div>
    );
  }
}
