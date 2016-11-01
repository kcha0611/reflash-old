const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const SessionStore = require('../stores/session_store');

const FourthUserIndex = React.createClass({
  getInitialState: function() {
    return {
      userPics: []
    };
  },
  render: function() {
    let FourthUserPics = PictureStore.all().filter( (pic) => {
      return pic.user.id == 4
    })
    let likeBtn;
    if (SessionStore.checkLoggedIn()) {
      likeBtn = (<LikeButton />)
    }
    return (
      <div className="pic-index-wrap">
        <h1>Collection #4</h1>
        <h4 className="first-user-header">Curated by Joseph Kim</h4>
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {FourthUserPics.map( (pic) => {
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
              })
            }
          </div>
        </ul>
      </div>
    )
  }
})


module.exports = FourthUserIndex;
