import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'lib-flexible'

ReactDOM.render(<App />, document.getElementById('root'))
if (module.hot) {
  // module.hot.accept('./App.js', function() {
  //   console.log('Accepting the updated printMe module!');
  //   printMe();
  // })
  module.hot.accept()
}