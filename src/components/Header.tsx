import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';

const GREETER_QUERY = gql`
  query {
    me {
      username
    }
  }
`;

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div className="flex pa1 justify-between nowrap orange">
        <div className="flex flex-fixed black">
          <div className="fw7 mr1">Grocery List</div>
          {authToken && (
            <span>
              <Query query={GREETER_QUERY}>
                {({ loading, error, data }) => {
                  if (loading) {
                    return <div>Fetching</div>;
                  }
                  if (error) {
                    return <div>Error</div>;
                  }

                  const nameToDisplay = data.me.username;

                  return <div>Hello, {nameToDisplay}</div>;
                }}
              </Query>
              <Link to="/" className="ml1 no-underline black">
                List
              </Link>
              |
              <Link to="/create" className="ml1 no-underline black">
                Add Item
              </Link>
              |
            </span>
          )}

          {authToken ? (
            <span
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN);
                // @ts-ignore
                this.props.history.push(`/`);
              }}
            >
              logout
            </span>
          ) : (
            <Link to="/login" className="ml1 no-underline black">
              Login
            </Link>
          )}
          <hr />
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
