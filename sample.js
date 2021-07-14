import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {createStore} from 'redux'

//Store -> Globalized State

//Actions - They describe what will happen, for instance, increment will simply add a number. Each action returns an object with the property type, which is just the name of the action
const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

//Reducer, it is a switch statement, the first parameter is the initial state
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return false
  }
}

let store = createStore(counter);

//Display it in the console
store.subscribe(() => console.log(store.getState()))

//Dispatch - lets say I want to call the increment
store.dispatch(increment());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

