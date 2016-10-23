const React = require('react');
const PictureStore = require('../stores/picture_store');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const PictureActions = require('../actions/picture_actions');

const UserPictureIndex = React.createClass({
  getInitialState: function() {
    return {
      pictures: []
    };
  },
  componentDidMount: function() {
    PictureStore.addListener(this.getUserPics)
    PictureActions.fetchPictures()
  },
  getUserPics: function() {
    this.setState({pictures: PictureStore.all()})
  },
  render() {
    let userPictures = [];
    let firstUserPictures = this.state.pictures.filter((pic) => {
      return pic.user.id == 1
    })
    let secondUserPictures = this.state.pictures.filter((pic) => {
      return pic.user.id == 2
    })
    let thirdUserPictures = this.state.pictures.filter((pic) => {
      return pic.user.id == 3
    })
    let fourthUserPictures = this.state.pictures.filter((pic) => {
      return pic.user.id == 4
    })
    let firstPhotoCover = firstUserPictures[0];
    return (
      <div>
        <h1>Featured Collections</h1>
        <div className="first-collection-wrap">
          <img src={firstPhotoCover.picture_url}/>
        </div>
        <div className="second-collection-wrap">
        </div>
      </div>
    )
  }
})

module.exports = UserPictureIndex;
