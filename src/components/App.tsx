import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import CreateItem from './CreateItem';
import Header from './Header';
import ItemList from './ItemList';
import Login from './Login';

const LOCAL_HELLO = gql`
  query localHello($subject: String) {
    localHello(subject: $subject) @client
  }
`;

const App = () => (
  <div className="center w85">
    {/* <Header /> */}
    <div className="ph3 pv1 background-gray">
      <Header />
      <Switch>
        <Route exact path="/" component={ItemList} />
        <Route exact path="/create" component={CreateItem} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  </div>
);

export default App;
