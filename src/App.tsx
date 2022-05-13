import React from 'react';
import './app/styles/App.scss';
import { Navbar } from './app/components/Navbar/Navbar';
import Catalog from './app/components/Catalog/Catalog';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Catalog/>
      </div>
    );
  }
}

export default App;
