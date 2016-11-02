var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PictureConstants = require('../constants/picture_constants');
const VoteConstants = require('../constants/vote_constants');

let PictureStore = new Store(AppDispatcher);

let _pictures = {};

PictureStore.all = function () {
  return Object.keys(_pictures).reverse().map((key) => {
    return _pictures[key];
  })
}

PictureStore.find = function (id) {
  return _pictures[id];
}

PictureStore.addPictures = function (pictures) {
  _pictures = {};
  pictures.forEach((picture) => {
    _pictures[picture.id] = picture
  });
}

PictureStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PictureConstants.RECEIVED_PICTURES:
      PictureStore.addPictures(payload.pictures);
      this.__emitChange();
      break;
    case PictureConstants.RECEIVED_PICTURE:
      PictureStore.addPicture(payload.picture);
      this.__emitChange();
      break;
    case VoteConstants.RECEIVED_VOTE:
      PictureStore.addVote(payload.vote);
      this.__emitChange();
      break;
    case VoteConstants.REMOVED_VOTE:
      PictureStore.removeVote(payload.vote);
      this.__emitChange();
      break;
  }
}

PictureStore.addPicture = function (picture) {
  _pictures[picture.id] = picture;
}

PictureStore.addVote = function (vote) {
  PictureStore.find(vote.picture_id).votes.push(vote)
}

PictureStore.removeVote = function (vote) {
  PictureStore.find(vote.picture_id).votes.forEach((picVote) => {
    if (vote.id = picVote.id) {
      picVote.remove();
    }
  })
}


module.exports = PictureStore;
