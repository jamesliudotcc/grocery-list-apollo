import React, { Component } from 'react';

interface ItemProps {
  item: { name: string; qty: number };
}

class Item extends Component<ItemProps> {
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
