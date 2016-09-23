const PictureIndex = require('./picture_index');
const React = require('react');
const PictureStore = require('../stores/picture_store');

const PictureIndexItem = React.createClass({
  render() {
    return (
      <div className="pic-index-item-wrap">
        <img src={this.props.pic.picture_url} onClick={this.enlargePicture} className="pic-index-item" />
      </div>)
  }
});

module.exports = PictureIndexItem;
