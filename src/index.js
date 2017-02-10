// node modules
const React = require('react')
const { render } = require('react-dom')
const Footer = require('./components/Footer')

require('./helpers/configure')()

// local modules
const App = require('./components/App')

render(
  <App />,
  document.getElementById('root')
)

render(
  <Footer />,
  document.getElementById('madewith')
)
