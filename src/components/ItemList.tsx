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
    // const itemsToRender = [
    //   {
    //     id: 1,
    //     name: 'Creme Fraiche',
    //     qty: 1,
    //   },
    //   {
    //     id: 2,
    //     name: 'Canned smoked trout 4oz',
    //     qty: 2,
    //   },
    //   {
    //     id: 3,
    //     name: 'toothbrushes',
    //     qty: 1,
    //   },
    // ];
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
