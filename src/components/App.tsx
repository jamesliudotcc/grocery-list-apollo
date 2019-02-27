import { gql } from 'apollo-boost';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './Header';
import CreateItem from './CreateItem';
import ItemList from './ItemList';

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
      </Switch>
    </div>
  </div>
);

export default App;
