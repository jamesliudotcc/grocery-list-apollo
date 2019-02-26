import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Item from './Item';

const ITEMS_QUERY = gql`
  query {
    items {
      id
      name
      qty
    }
  }
`;

type Props = any;
// { items: Array<{ name: string; qty: number }> };

class ItemList extends Component<Props> {
  render() {
    return (
      <Query query={ITEMS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return <div>Fetching</div>;
          }
          if (error) {
            return <div>Error</div>;
          }

          const itemsToRender = data.items;

          return (
            <div>
              {itemsToRender.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default ItemList;
