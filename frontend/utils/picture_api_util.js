const PictureApiUtil = {
  fetchPictures: function(callback) {
    $.ajax({
      url: '/api/pictures',
      method: "GET",
      success: function(pictures) {
        callback(pictures)
      }
    })
  },
  getPicture: function(id,callback) {
    $.ajax({
      url: `/api/pictures/${id}`,
      method: 'GET',
      success(posts) {
        callback(posts);
      }
    })
  }
}

module.exports = PictureApiUtil;
