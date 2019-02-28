import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { Query } from 'react-apollo';

import { AUTH_TOKEN } from '../constants';
import Item from './Item';

const ITEMS_QUERY = gql`
  query {
    items {
      id
      name
      qty
      boughtBool
    }
  }
`;

type Props = any;
// { items: Array<{ name: string; qty: number }> };

class ItemList extends Component<Props> {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      authToken && (
        <Query query={ITEMS_QUERY}>
          {({ loading, error, data }) => {
            if (loading) {
              return <div>Fetching</div>;
            }
            if (error) {
              return <div>Error</div>;
            }

            const itemsToRender = data.items;
            console.log(data.items);

            return (
              <div>
                {itemsToRender
                  .filter(item => !item.boughtBool)
                  .map(item => (
                    <Item key={item.id} item={item} />
                  ))}
              </div>
            );
          }}
        </Query>
      )
    );
  }
}

export default ItemList;
