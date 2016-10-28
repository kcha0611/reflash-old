const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const FifthUserIndex = React.createClass({
  getInitialState: function() {
    return {
      userPics: []
    };
  },
  render: function() {
    let fifthUserPics = PictureStore.all().filter( (pic) => {
      return pic.user.id == 4
    })
    return (
      <div className="pic-index-wrap">
        <h1>Collection #5</h1>
        <h4 className="first-user-header">Curated by Joe Kim</h4>
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {fifthUserPics.map( (pic) => {
                return <img src={pic.picture_url} className="pic-index-item"/>
              })
            }
          </div>
        </ul>
      </div>
    )
  }
})


module.exports = FifthUserIndex;
