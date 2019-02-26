import ApolloClient from 'apollo-boost';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import App from './components/App';

const GRAPHQL_API_URL = 'http://localhost:8000/graphql/';

const client = new ApolloClient({
  clientState: {
    resolvers: {
      Query: {
        localHello(obj: any, { subject }: { subject: string }) {
          return `Hello, ${subject}! from Web UI`;
        },
      },
    },
  },
  uri: GRAPHQL_API_URL,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
