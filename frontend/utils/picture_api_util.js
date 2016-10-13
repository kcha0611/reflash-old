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
  },
  createPicture: function(data, cb) {
    $.ajax({
      url: '/api/pictures',
      method: "POST",
      dataType: 'json',
      data: data,
      success(response) {
        cb(response)
      }
    })
  }
}

module.exports = PictureApiUtil;
