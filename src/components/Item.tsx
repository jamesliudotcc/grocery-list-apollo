import React, { Component } from 'react';

type ItemProps = any;

// {  item: { name: string; qty: number; boughtBool: any };}

class Item extends Component<ItemProps> {
  render() {
    console.log(this.props.item);
    return (
      <div>
        <div>
          {this.props.item.name} {this.props.item.qty}{' '}
          {this.props.item.boughtBool ? 'true' : 'false'}
        </div>
      </div>
    );
  }
}

export default Item;
