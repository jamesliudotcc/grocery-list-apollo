import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

const POST_MUTATION = gql`
  mutation PostMutation(
    $name: String!
    $qty: Int!
    $house: Int
    $stores: [Int]
  ) {
    createItem(name: $name, qty: $qty, house: $house, stores: $stores) {
      id
      name
      qty
    }
  }
`;

class CreateItem extends Component {
  state = {
    name: '',
    qty: 1,
    stores: [1, 2],
    bought: null,
    bought_by: null,
    house: 1,
  };

  render() {
    const { name, qty, house, stores } = this.state;
    return (
      <div>
        <Mutation
          mutation={POST_MUTATION}
          variables={{ name, qty, house, stores }}
        >
          {PostMutation => (
            <form
              onSubmit={e => {
                e.preventDefault();
                PostMutation();
              }}
            >
              <div className="flex flex-column mt3">
                <input
                  className="mb2"
                  value={name}
                  onChange={e => this.setState({ name: e.target.value })}
                  type="text"
                  placeholder="What to buy"
                />
                <input
                  className="mb2"
                  value={qty}
                  onChange={e => this.setState({ qty: e.target.value })}
                  type="text"
                  placeholder="How much"
                />
                <input type="submit" />
              </div>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}
export default CreateItem;
