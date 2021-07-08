import {Component} from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Proloy',
      password: '',
    };
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
    console.log('Username', event.target.value);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    console.log('Password', event.target.value);
  }

  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="username"
              placeholder="name@example.com"
              onChange={this.handleUsernameChange.bind(this)}
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
              onChange={this.handlePasswordChange.bind(this)}
              value={this.state.password}
            />
          </div>
        </div>
      </div>
    );
  }
}
