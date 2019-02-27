import React, { Component } from 'react';
import { AUTH_TOKEN } from '../constants';

class Login extends Component {
  state = {
    login: true,
    email: '',
    password: '',
    username: '',
  };

  render() {
    const { login, email, password, username } = this.state;

    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <div className="pointer mr2 button" onClick={() => this.confirm()}>
            {login ? 'login' : 'create account'}
          </div>
          <div
            className="pointer button"
            onClick={() => this.setState({ login: !login })}
          >
            {login ? 'need to create an account?' : 'already have an account?'}
          </div>
        </div>
      </div>
    );
  }
  private confirm = async () => {
    //
  };

  private saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}
