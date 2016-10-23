let Store = require('flux/utils').Store;
let AppDispatcher = require('../dispatcher/dispatcher');
let UserConstants = require('../constants/picture_constants');

let UserStore = new Store(AppDispatcher);

let _users = {};

UserStore.all = function() {
  return Object.keys(_users).reverse().map((key) => {
    return _users[key]
  })
}

UserStore.find = function(id) {
  return _users[id]
}

UserStore.addUsers = function (users) {
  _users = {};
  users.forEach((user) => {
    _users[user.id] = user
  });
}

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.USER_RECEIVED:
    UserStore.addUsers(payload.users);
    this.__emitChange();
    break;
    case UserConstants.USERS_RECEIVED:
    UserStore.addPicture(payload.picture);
    this.__emitChange();
    break;
  }
}

UserStore.addUser = function (user) {
  _users[user.id] = user;
}

module.exports = UserStore;
