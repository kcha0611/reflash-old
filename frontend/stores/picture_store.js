var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PictureConstants = require('../constants/picture_constants');

let PictureStore = new Store(AppDispatcher);

let _pictures = {};

PictureStore.all = function () {
  return Object.keys(_pictures).reverse().map((key) => {
    return _pictures[key];
  })
}

PictureStore.find = function (id) {
  _pictures[id];
}

PictureStore.addPictures = function (pictures) {
  _pictures = {};
  pictures.forEach((picture) => {
    _pictures[picture.id] = picture
  })
}

PictureStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PictureConstants.RECEIVED_PICTURES:
      PictureStore.addPictures(payload.pictures);
      this.__emitChange();
      break;
  }
}

module.exports = PictureStore;
