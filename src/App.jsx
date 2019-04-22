import React, { Component } from 'react';
import Menu from './Menu';
import ContactNew from './ContactNew'
import ContactList from './ContactList'
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Index Page</h1>
        <Menu />
        <Switch>
          <Route path="/new" component={ContactNew} />
          <Route path="/list" component={ContactList} />
        </Switch>
      </div>
    );
  }
}

export default App;
