const React = require('react');

const App = React.createClass({
  render() {
    return (
      <div>
        <p>Hello World!</p>
        <ul>
          {this.props.children}
        </ul>
      </div>
    )
  }

})

module.exports = App;
