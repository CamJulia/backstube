import React from 'react';
import '../App.css';

class ShoppingList extends React.Component {
  render() {
    const ingredientList = Object.keys(this.props.ingredients);

    const listItems = ingredientList.map(item => (
      <li key={item}>
        {item}: {this.props.ingredients[item]}
      </li>
    ));

    return (
      <div className="zettel">
        <h2>Einkaufszettel</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default ShoppingList;
