const PictureApiUtil = {
  fetchPictures: function(callback) {
    $.ajax({
      url: '/api/pictures',
      method: "GET",
      success: function(pictures) {
        callback(pictures)
      }
    })
  }
}
