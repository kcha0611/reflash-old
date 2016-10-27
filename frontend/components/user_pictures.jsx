const React = require('react');
const PictureStore = require('../stores/picture_store');
const UserStore = require('../stores/user_store');
const UserActions = require('../actions/user_actions');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

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
  goFirstUser: function() {
      hashHistory.push("/users/collections/1")
  },
  goSecondUser: function() {
      hashHistory.push("/users/collections/2")
  },
  goThirdUser: function() {
      hashHistory.push("/users/collections/3")
  },
  goFourthUser: function() {
      hashHistory.push("/users/collections/4")
  },
  goFifthUser: function() {
      hashHistory.push("/users/collections/5")
  },
  render() {
    return (
      <div>
        <h1>Featured Collections</h1>
        <div className="collections-wrap">
          <div className="inner-collections-wrap">
            <div className="first-collection-wrap">
              <h2 className="collection-one-title" onClick={this.goFirstUser}>COLLECTION #1</h2>
              <h4 className="collection-one-title" id="collection-one-date" onClick={this.goFirstUser}>October 8th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1474935416/1920x1080_e1aoab.jpg" className="first-collection-img" id="collection-img" onClick={this.goFirstUser}/>
            </div>
            <div className="second-collection-wrap">
              <h2 className="collection-two-title" onClick={this.goSecondUser}>COLLECTION #2</h2>
              <h4 className="collection-two-title" id="collection-two-date" onClick={this.goSecondUser}>October 10th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/v1474935395/1920x1080_a0vlgw.jpg" className="second-collection-img" id="collection-img" onClick={this.goSecondUser}/>
            </div>
          </div>
          <div className="three-collection-wrap">
            <div className="third-collection-wrap">
              <h2 className="collection-three-title" onClick={this.goThirdUser}>COLLECTION #3</h2>
              <h4 className="collection-three-title" id="collection-three-date" onClick={this.goThirdUser}>October 17th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_1080,w_1920/v1477524693/nature_ayqyoq.jpg" className="third-collection-img" id="collection-img" onClick={this.goThirdUser}/>
            </div>
            <div className="fourth-collection-wrap">
              <h2 className="collection-four-title" onClick={this.goFourthUser}>COLLECTION #4</h2>
              <h4 className="collection-four-title" id="collection-four-date" onClick={this.goFourthUser}>October 20th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_1080,w_1920/v1477524681/nature_fznpry.jpg" className="fourth-collection-img" id="collection-img" onClick={this.goFourthUser}/>
            </div>
            <div className="fifth-collection-wrap">
              <h2 className="collection-four-title" onClick={this.goFifthUser}>COLLECTION #5</h2>
              <h4 className="collection-four-title" id="collection-four-date" onClick={this.goFifthUser}>October 26th, 2016</h4>
              <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_1080,w_1920/v1477524677/nature_dcomfs.jpg" className="fifth-collection-img" id="collection-img" onClick={this.goFifthUser}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = UserPictureIndex;
