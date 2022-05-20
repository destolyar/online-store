import React from 'react'
import ItemPage from './app/components/ItemPage/ProductPage'
import Catalog from './app/components/Catalog/Catalog'
import { Navbar } from './app/components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import Cart from './app/components/Cart/Cart'
import { NotFound } from './app/components/NotFound/NotFound'
import './app/styles/App.scss'
import { Layout } from './app/components/Layout/Layout'


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Layout>
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
        </Layout>
      </div>
    );
  }
}

export default App;
