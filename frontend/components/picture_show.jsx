const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');

const PictureShow = React.createClass({
  getInitialState: function() {
    let potentialPicture = PictureStore.find(parseInt(this.props.params.pictureId));
    let finalPicture = potentialPicture ? potentialPicture : {};
    return {
      picture: finalPicture
    };
  },
  componentDidMount: function() {
    this.pictureListener = PictureStore.addListener(this.fetchPost);
    PictureActions.getPicture(parseInt(this.props.params.pictureId))
  },
  componentWillUnmount: function() {
    this.pictureListener.remove()
  },
  fetchPost() {
    PictureActions.getPicture(parseInt(this.props.params.pictureId))
  },
  render() {
    return (
      <div className="pic-show-wrap">
        <img className="pic-show-img" src={this.state.picture.picture_url}></img>
      </div>
    )
  }
});

module.exports = PictureShow
