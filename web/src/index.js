import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import todosReducer from './redux/reducer/todos';
import testeReducer from './redux/reducer/newTodos';

const rootReducer = combineReducers({
  // personalTodos: todosReducer('Personal'),
  // starredTodos: todosReducer('Starred'),
  // finishedTodos: todosReducer('Finished'),
  testeTodos: testeReducer(),
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
