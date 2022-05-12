import React from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.scss';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import { client } from './app/apolloClient';
import { Provider } from 'react-redux'
import { store } from './app/store';


ReactDOM.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
       <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
