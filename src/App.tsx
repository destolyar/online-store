import React from 'react'
import ItemPage from './app/components/ItemPage/ItemPage'
import Catalog from './app/components/Catalog/Catalog'
import { Navbar } from './app/components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import { Cart } from './app/components/Cart/Cart'
import { NotFound } from './app/components/NotFound/NotFound'
import './app/styles/App.scss'


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
