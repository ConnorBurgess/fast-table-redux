import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { provider } from 'react-redux';
import { createStore } from 'redux';
import sectionListReducer from './reducers/section-list-reducer';
 const store = createStore(sectionListReducer);
 
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
