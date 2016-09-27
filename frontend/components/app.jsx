const React = require('react');
const ReactBootstrap = require('react-bootstrap');
const Navbar = ReactBootstrap.Navbar;

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App;
