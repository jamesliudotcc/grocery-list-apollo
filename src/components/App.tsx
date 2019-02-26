import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';

const LOCAL_HELLO = gql`
  query localHello($subject: String) {
    localHello(subject: $subject) @client
  }
`;

const SERVER_HELLO = gql`
  query serverHello($subject: String) {
    hello(subject: $subject)
  }
`;

const GET_HOUSES = gql`
  query {
    houses {
      id
      name
    }
  }
`;

const LocalHello = () => (
  <Query query={LOCAL_HELLO} variables={{ subject: 'World' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }

      return (
        <h2>Local Salutation: {error ? error.message : data.localHello}</h2>
      );
    }}
  </Query>
);

const ServerHello = () => (
  <Query query={GET_HOUSES}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }

      return (
        <h2>
          Server Salutation:&nbsp;
          {error ? error.message : data.houses[0].name}
        </h2>
      );
    }}
  </Query>
);

const App = () => (
  <div>
    <h1>Welcome to your own GraphQL web front end!</h1>
    <h2>You can start editing source code and see results immediately</h2>
    <LocalHello />
    <ServerHello />
  </div>
);

export default App;
