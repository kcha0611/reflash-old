const PictureIndex = require('./picture_index');
const React = require('react');
const PictureStore = require('../stores/picture_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const PictureIndexItem = React.createClass({
  showPic() {
    hashHistory.push(`/pictures/${this.props.pic.id}`)
  },
  render() {
    return (
      <div className="pic-index-item-wrap">
        <img src={this.props.pic.picture_url} className="pic-index-item" onClick={this.showPic}/>
      </div>
    )
  }
});

module.exports = PictureIndexItem;
