const PictureIndex = require('./picture_index');
const React = require('react');

const PictureIndexItem = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.pic.picture_url} />
      </div>)
  }
});

module.exports = PictureIndexItem;
