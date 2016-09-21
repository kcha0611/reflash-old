const React = require('react');

const App = React.createClass({
  render() {
    return (
      <div>
        <p>Hello World!</p>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App;
