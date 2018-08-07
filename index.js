import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return React.createElement('h1', null, "Hello");
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById("app");
  ReactDOM.render(React.createElement(App), app);
});
