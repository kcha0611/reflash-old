const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const ThirdUserIndex = React.createClass({
  getInitialState: function() {
    return {
      userPics: []
    };
  },
  render: function() {
    let thirdUserPics = PictureStore.all().filter( (pic) => {
      return pic.user.id == 3
    })
    return (
      <div className="pic-index-wrap">
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {thirdUserPics.map( (pic) => {
                return <img src={pic.picture_url} className="pic-index-item"/>
              })
            }
          </div>
        </ul>
      </div>
    )
  }
})


module.exports = ThirdUserIndex;
