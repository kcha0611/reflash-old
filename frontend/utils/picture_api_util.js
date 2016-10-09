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
  },
  getSearchedPictures: function(searchInput, callback) {
    $.ajax({
      url: '/api/pictures',
      method: "GET",
      data: {pictures: searchInput},
      success (response) {
        callback(response)
      }
    })
  }
}

module.exports = PictureApiUtil;
