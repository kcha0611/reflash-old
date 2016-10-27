const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const SecondUserIndex = React.createClass({
  getInitialState: function() {
    return {
      userPics: []
    };
  },
  render: function() {
    let secondUserPics = PictureStore.all().filter( (pic) => {
      return pic.user.id == 2
    })
    return (
      <div className="pic-index-wrap">
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {secondUserPics.map( (pic) => {
                return <img src={pic.picture_url} className="pic-index-item"/>
              })
            }
          </div>
        </ul>
      </div>
    )
  }
})


module.exports = SecondUserIndex;
