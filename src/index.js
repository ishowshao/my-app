import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import * as serviceWorker from './serviceWorker';
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
function Welcome(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

function Item(props) {
  return <li>{props.content}</li>;
}

function List(props) {
  return <ul><Item></Item></ul>;
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
