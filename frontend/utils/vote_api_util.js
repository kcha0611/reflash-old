const VoteApiUtil = {
  createVote(data, callback) {
    $.ajax({
      method: "POST",
      url: 'api/votes',
      data: {vote: data},
      success(resp) {
        callback(resp)
      },
      error(resp) {
        console.log("error in createVote");
      }
    })
  },
  deleteVote(data, callback) {
    $.ajax({
      method: 'DELETE',
      url: 'api/likes',
      data: {vote: data},
      success(resp) {
        callback(resp)
      },
      error(resp) {
        console.log("error in deleteVote");
      }
    })
  }
}

module.exports = VoteApiUtil;
