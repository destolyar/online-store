import React from 'react'
import './app/styles/App.scss'
import { Navbar } from './app/components/Navbar/Navbar'
import Catalog from './app/components/Catalog/Catalog'
import { Switch, Route } from 'react-router-dom'
import { Cart } from './app/components/Cart/Cart'
import { ItemPage } from './app/components/ItemPage/ItemPage'
import { NotFound } from './app/components/NotFound/NotFound'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Catalog/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/product/:id">
            <ItemPage/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
