import React from 'react';
import './App.css';
import Cookies from './components/CookieList';
import ShoppingList from './components/ShoppingList';
import cookies from './cookies';

class App extends React.Component {
  state = {
    cookies: [],
    shoppingList: {}
  };

  refreshShoppingList = cookie => {
    // iterate through all ingredients in cookies[cookie].ingredients => ingredient
    const ingredientList = Object.keys(cookies[cookie].ingredients);
    const currentShoppingList = { ...this.state.shoppingList };
    // MDN Array reduce with object as start item?
    ingredientList.forEach(ingredient => {
      // check if ingredient is already in this.state.shoppingList
      currentShoppingList[ingredient]
        ? (currentShoppingList[ingredient] +=
            cookies[cookie]['ingredients'][ingredient])
        : (currentShoppingList[ingredient] =
            cookies[cookie]['ingredients'][ingredient]);
    });

    this.setState({ shoppingList: currentShoppingList });
  };
  
  reduceShoppingList = cookie => {
    // iterate through all ingredients in cookies[cookie].ingredients => ingredient
    const ingredientList = Object.keys(cookies[cookie].ingredients);
    const currentShoppingList = { ...this.state.shoppingList };
    ingredientList.forEach(ingredient => {
      // check if ingredient is already in this.state.shoppingList
(currentShoppingList[ingredient] -= cookies[cookie]['ingredients'][ingredient])
    });
 this.setState({ shoppingList: currentShoppingList });
  };

  addCookie = e => {
    const { cookie } = e.target.dataset;
    let allTheCookies = [...this.state.cookies]
    let cookieIndex = this.state.cookies.indexOf(cookie)
if (cookieIndex > -1) {
allTheCookies.splice(cookieIndex, 1)
this.reduceShoppingList(cookie);
} else {
  allTheCookies.push(cookie)
  this.refreshShoppingList(cookie);
}
console.log("This is allTheCookies: ", allTheCookies)
    this.setState({
      cookies: allTheCookies
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Sophies Backstube</h1>
        <div className="GridContainer">
          {this.state.shoppingList ? (
            <ShoppingList ingredients={this.state.shoppingList}></ShoppingList>
          ) : (
            <ShoppingList></ShoppingList>
          )}

          <div>
            <Cookies addCookie={this.addCookie} />
          </div>
          <div className="rezepte">
            <h2>Rezepte</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
