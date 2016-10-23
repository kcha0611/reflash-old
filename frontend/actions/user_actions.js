const AppDispatcher = require('../dispatcher/dispatcher');
const UserStore = require('../stores/user_store');
const UserConstants = require('../constants/session_constants');
const hashHistory = require('react-router').hashHistory;
const UserApiUtil = require('../utils/session_api_util');

const UserActions = {
  fetchUsers() {
    UserApiUtil.fetchUsers(this.receiveAllUsers)
  },
  fetchUser(id) {
    UserApiUtil.fetchUser(this.receiveUser)
  },
  receiveAllUsers(users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    })
  },
  receiveUser(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    })
  }
}

module.exports = UserActions;
