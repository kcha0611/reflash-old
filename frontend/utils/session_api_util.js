"use-strict";

const SessionApiUtil = {
  logIn(user, success, errCb) {
    $.ajax({
      url: '/api/session',
      data: {user},
      dataType: 'json',
      method: "POST",
      success,
      error: function (message) {
        const errors = message.responseJSON;
        errCb("login", errors);
      }
    });
  },
  signUp(user, success, errCb) {
    $.ajax({
      url: '/api/users',
      data: {user},
      method: "POST",
      success,
      error: function (message) {
        const errors = message.responseJSON;
        errCb("signup", errors);
      }
    });
  },
  logOut(success) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success,
      error(message) {
        console.log("error in logOut");
      }
    })
  },
  fetchCurrentUser(success, complete) {
    $.ajax({
      url: '/api/session',
      method: 'GET',
      success,
      error(message) {
        console.log("error in fetchCurrentUser");
      },
      complete
    });
  }
};

module.exports = SessionApiUtil;
