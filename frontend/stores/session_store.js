var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SessionConstants = require('../constants/session_constants');

var SessionStore = new Store(AppDispatcher);

var _currentUser = {};
var _currentUserFetched = false;

var _login = function (currentUser) {
  _currentUser = currentUser
  _currentUserFetched = true;
}

var _logOut = function() {
  _currentUser = {};
  _currentUserFetched = false;
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
}

SessionStore.checkLoggedIn = function () {
  return !!_currentUser.id;
}

SessionStore.checkUserFetched = function () {
  return !!_currentUserFetched;
}

SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      this.__emitChange();
      break
    case SessionConstants.LOGOUT:
      _logout(payload.currentUser);
      this.__emitChange();
      break
  }
}

module.exports = SessionStore;
