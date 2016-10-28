const AppDispatcher = require('../dispatcher/dispatcher');
const SessionStore = require('../stores/session_store');
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const SessionApiUtil = require('../utils/session_api_util');

const SessionActions = {
  logIn(data) {
    SessionApiUtil.logIn(data, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  signUp(data) {
    SessionApiUtil.signUp(data, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logOut() {
    SessionApiUtil.logOut(this.removeCurrentUser);
  },
  fetchCurrentUser(complete) {
    SessionApiUtil.fetchCurrentUser(this.receiveCurrentUser, complete);
  },
  receiveCurrentUser(currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    })
  },
  removeCurrentUser() {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    });
    hashHistory.push('/');
  }
}

module.exports = SessionActions;
