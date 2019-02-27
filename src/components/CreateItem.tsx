import { gql } from 'apollo-boost';
import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

const POST_MUTATION = gql`
  mutation postMutation($name: String!, $qty: Int) {
    post(name: $name, qty: $qty) {
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
    stores: [],
    bought: null,
    bought_by: null,
    houses: [],
  };

  render() {
    const { name, qty, stores, bought, bought_by, houses } = this.state;
    return (
      <div>
        <Mutation mutation={POST_MUTATION}>
          {postMutation => (
            <form
              onSubmit={e => {
                e.preventDefault();
                postMutation({ variables: { name, qty } });
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
