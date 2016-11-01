const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const React = require('react');
const PictureIndexItem = require('./picture_index_item');
const SessionStore = require('../stores/session_store');
const LikeButton = require('./like_button');

const NewPicturesIndex = React.createClass({
  getInitialState() {
    return {pictures: []}
  },
  componentDidMount() {
    this.allPics = PictureStore.addListener(this.getPictures);
    PictureActions.fetchPictures();
  },
  getPictures() {
    let filteredPictures = PictureStore.all().sort( (function(first, second) {
      return new Date(first.created_at).getTime() - new Date(second.created_at).getTime()
    })
  )
    this.setState( {pictures: filteredPictures} )
  },
  componentWillUnmount() {
    this.allPics.remove();
  },
  render() {
    let likeBtn;
    if (SessionStore.checkLoggedIn()) {
      likeBtn = (<LikeButton />)
    }
    let allPictures = this.state.pictures.map( (pic) => {
      return (
      <div>
        <img src={pic.picture_url} className="pic-index-item"/>
        <div className="inner-user-wrap">
          <img src="https://res.cloudinary.com/dllnnnotc/image/upload/c_scale,w_33/v1472239548/latest_cz23gu.jpg" className="user-img"/>
          <a className="user-show-link">{pic.user.f_name} {pic.user.l_name}</a>
          {likeBtn}
        </div>
      </div>
    )
    });
    return (
      <div className="pic-index-wrap">
        <h1 className="new-title">New Photos</h1>
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {allPictures}
          </div>
        </ul>
      </div>
    )
  }
})

module.exports = NewPicturesIndex;
