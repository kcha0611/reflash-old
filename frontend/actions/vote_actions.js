const AppDispatcher = require('../dispatcher/dispatcher');
const VoteConstants = require('../constants/vote_constants');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const VoteApiUtil = require('../utils/vote_api_util');

const VoteActions = {
  createVote(vote) {
    VoteApiUtil.createVote(vote, this.receiveVote)
  },
  deleteVote(vote) {
    VoteApiUtil.deleteVote(vote, this.removeVote)
  },
  receiveVote(vote) {
    AppDispatcher.dispatch({
      actionType: VoteConstants.RECEIVED_VOTE,
      vote: vote
    })
  },
  removeVote(vote) {
    AppDispatcher.dispatch({
      actionType: VoteConstants.REMOVED_VOTE,
      vote: vote
    })
  }
}

module.exports = VoteActions;
