const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');
const AppDispatcher = require('../dispatcher/dispatcher');

const ErrorStore = new Store(AppDispatcher);

let _errors = [];
let _form = "";

const _setErrors = function (data) {
  _errors = data.errors;
  _form = data.form;
};

const _clearErrors = function () {
  _errors = [];
  _form = "";
};

ErrorStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      _setErrors(payload);
      this.__emitChange();
      break
    case ErrorConstants.CLEAR_ERRORS:
      _clearErrors();
      this.__emitChange();
      break
  }
};

ErrorStore.errors = function (form) {
  if (form !== _form) {
    return [];
  }
    return _errors.slice();
}

ErrorStore.form = function () {
  return _form;
};

module.exports = ErrorStore;
