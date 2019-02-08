import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {createStore} from 'redux';
import redusers from './reducers/reducer';
import {Provider} from 'react-redux';

const store = createStore(redusers);
window.store = store;

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

