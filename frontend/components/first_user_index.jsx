const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const UserStore = require('../stores/user_store');

const FirstUserIndex = React.createClass({
  getInitialState: function() {
    return {
      userPics: []
    };
  },
  findUser: function() {
    User.all().map((user) => {
      return user.id == 1
    })
  },
  render: function() {
    let firstUserPics = PictureStore.all().filter( (pic) => {
      return pic.user.id == 1
    })
    return (
      <div className="pic-index-wrap">
        <h1>Collection #1</h1>
        <h4 className="first-user-header">Curated by Guest Guest</h4>
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {firstUserPics.map( (pic) => {
                return <img src={pic.picture_url} className="pic-index-item"/>
              })
            }
          </div>
        </ul>
      </div>
    )
  }
})


module.exports = FirstUserIndex;
