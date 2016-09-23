const AppDispatcher = require('../dispatcher/dispatcher');
const PictureConstants = require('../constants/picture_constants');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const PictureApiUtil = require('../utils/picture_api_util');


const PictureActions = {
  fetchPictures: function () {
    PictureApiUtil.fetchPictures(this.receivePictures);
  },
  receivePictures: function (pictures) {
    AppDispatcher.dispatch({
      actionType: PictureConstants.RECEIVED_PICTURES,
      pictures: pictures
    })
  },
  getPicture: function(id) {
    PictureApiUtil.receivePicture(id, this.receivePicture);
  },
  receivePicture: function(picture) {
    AppDispatcher.dispatch({
      actionType: PictureConstants.RECEIVED_PICTURE,
      picture: picture
    })
  }
}

module.exports = PictureActions;
