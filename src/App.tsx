import React from 'react';
import './app/styles/App.scss';
import { Navbar } from './app/components/Navbar/Navbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
