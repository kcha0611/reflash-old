const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const PictureShow = React.createClass({
  getInitialState: function() {
    let potentialPicture = PictureStore.find(parseInt(this.props.params.pictureId));
    let finalPicture = potentialPicture ? potentialPicture : {};
    return {
      picture: finalPicture
    };
  },
  componentDidMount: function() {
    this.pictureListener = PictureStore.addListener(this.fetchPicture);
    PictureActions.getPicture(parseInt(this.props.params.pictureId))
  },
  componentWillUnmount: function() {
    this.pictureListener.remove()
  },
  fetchPicture() {
    PictureActions.getPicture(parseInt(this.props.params.pictureId))
  },
  zoomOut() {
    hashHistory.push('/pictures')
  },
  render() {
    return (
      <div className="pic-show-wrap" onClick={this.zoomOut}>
        <img className="pic-show-img" src={this.state.picture.picture_url} onClick={this.zoomOut}></img>
      </div>
    )
  }
});

module.exports = PictureShow
