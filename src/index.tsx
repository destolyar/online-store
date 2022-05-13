import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.scss';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/apolloClient';
import { Provider } from 'react-redux'
import { store } from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
