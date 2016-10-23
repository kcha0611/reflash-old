const UserApiUtil = {
  fetchUser(id, cb) {
    ajax({
      url: `/api/users/${id}`,
      success(users) {
        cb(users);
      }
    })
  },
  fetchUsers(cb) {
    ajax({
      url: '/api/users',
      success(users) {
        cb(users);
      }
    })
  }
}

module.exports = UserApiUtil;
