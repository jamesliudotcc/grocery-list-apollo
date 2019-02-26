import React, { Component } from 'react';

interface Props {
  item: { name: string; qty: number };
}

class Item extends Component<Props> {
  render() {
    return (
      <div>
        <div>
          {this.props.item.name} {this.props.item.qty}
        </div>
      </div>
    );
  }
}

export default Item;
