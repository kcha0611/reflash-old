const PictureIndex = require('./picture_index');
const React = require('react');
const PictureStore = require('../stores/picture_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const LikeButton = require('./like_button')
const SessionStore = require('../stores/session_store');

const PictureIndexItem = React.createClass({
  showPic() {
    hashHistory.push(`/pictures/${this.props.pic.id}`)
    $('#inner-main-wrap').hide()
  },
  capitalize(string) {
    string.charAt(0).toUpperCase() + string.split(1);
  },
  render() {
    let likeBtn;
    if (SessionStore.checkLoggedIn()) {
      likeBtn = (<LikeButton />)
    }
    return (
      <div className="pic-index-item-wrap">
        <img src={this.props.pic.picture_url} className="pic-index-item" onClick={this.showPic}/>
        <div className="inner-user-wrap">
          <img src="https://res.cloudinary.com/dllnnnotc/image/upload/c_scale,w_33/v1472239548/latest_cz23gu.jpg" className="user-img"/>
          <a className="user-show-link">{this.props.pic.user.f_name} {this.props.pic.user.l_name}</a>
        </div>
      </div>
    )
  }
});

module.exports = PictureIndexItem;
