const VoteApiUtil = {
  createVote(data, callback) {
    $.ajax({
      method: "POST",
      url: 'api/votes',
      data: data,
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
      data: data,
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
