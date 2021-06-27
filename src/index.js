import React from 'react'
import ReactDOM from 'react-dom'
import Home from './home'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
function printMe() {
  console.log('Updating print.js...');
 }
if (module.hot) {
  // module.hot.accept('./App.js', function() {
  //   console.log('Accepting the updated printMe module!');
  //   printMe();
  // })
  module.hot.accept()
}