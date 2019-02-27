import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import { AUTH_TOKEN } from '../constants';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`;

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

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
          <input
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
            type="text"
            placeholder="Username"
          />
          {!login && (
            <input
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
              placeholder="Your email address"
            />
          )}
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ username, password }}
            onCompleted={data => this.confirm(data)}
          >
            {mutation => (
              // @ts-ignore
              <div className="pointer mr2 button" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>

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
  private confirm = async data => {
    const { token } = this.state.login ? data.tokenAuth : data.signup;
    this.saveUserData(token);
    // @ts-ignore
    // this.props.history.push(`/`);
  };

  private saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
