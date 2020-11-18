import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import todosReducer from './redux/reducer/todos';

const rootReducer = combineReducers({
  landingTodos: todosReducer('Landing'),
  starredTodos: todosReducer('Starred'),
  finishedTodos: todosReducer('Finished'),
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
