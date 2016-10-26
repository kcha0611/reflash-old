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
    let firstUserPictures = [];
    firstUserPictures = this.state.pictures.filter( (pic) => {
      return pic.user.id == 2
    })
    return (
      <div>
        <h1>Featured Collections</h1>
        <div className="collections-wrap">
          <div className="inner-collections-wrap">
            <div className="first-collection-wrap">
              <h2 className="collection-one-title">COLLECTION #1</h2>
              <h4 className="collection-one-title" id="collection-one-date">October 8th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1474935416/1920x1080_e1aoab.jpg" className="first-collection-img"/>
            </div>
            <div className="second-collection-wrap">
              <h2 className="collection-two-title">COLLECTION #2</h2>
              <h4 className="collection-two-title" id="collection-two-date">October 10th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1474935395/1920x1080_a0vlgw.jpg" className="second-collection-img"/>
            </div>
          </div>
          <div className="three-collection-wrap">
            <div className="third-collection-wrap">
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1477012374/1920x1080_ofyxp9.jpg" className="third-collection-img"/>
            </div>
            <div className="fourth-collection-wrap">
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1477012374/1920x1080_ofyxp9.jpg" className="fourth-collection-img"/>
            </div>
            <div className="fifth-collection-wrap">2
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1477012374/1920x1080_ofyxp9.jpg" className="fifth-collection-img"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = UserPictureIndex;
