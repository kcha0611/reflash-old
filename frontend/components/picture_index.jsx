const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const React = require('react');
const PictureIndexItem = require('./picture_index_item');
const SessionStore = require('../stores/session_store');
const Masonry = require('react-masonry-component');

const PictureIndex = React.createClass({
  getInitialState() {
    return {pictures: []}
  },
  componentDidMount() {
    this.allPics = PictureStore.addListener(this.getPictures);
    PictureActions.fetchPictures();
  },
  getPictures() {
    this.setState( {pictures: PictureStore.all()} )
  },
  componentWillUnmount() {
    this.allPics.remove();
  },
  handleNormalTab() {
    $('#normal-tab').on("click", function() {
      $('.pic-index-item').removeClass("grid")
      $('.pic-index-ul').removeClass("grid")
      $('.pic-index-item-wrap').removeClass('grid')
      $('.user-show-link, .user-img').show()
    })
  },
  handleGridTab() {
    $('#grid-tab').on("click", function() {
      $('.pic-index-ul').addClass("grid")
      $('.pic-index-item').addClass('grid')
      $('.pic-index-item-wrap').addClass('grid')
      $('.user-show-link, .user-img').hide()
    })
  },
  render() {
    let allPictures = this.state.pictures.map( (pic, index) => {
      return (<PictureIndexItem key={index} pic={pic} className="picture-index-item"/>)
    });
    return (
      <div className="pic-index-wrap">
        <div className="tab-wrap">
          <img id="normal-tab" onClick={this.handleNormalTab} src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,w_34/v1477014487/mobile_menu_icon_zdz8sw.png"/>
          <img id="grid-tab" onClick={this.handleGridTab} src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,w_25/v1477014279/256-256-43252f44e69ebdd2e8bb5370ba120db4-grid_buzr3h.png"/>
        </div>
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {allPictures}
          </div>
        </ul>
      </div>
    )
  }
});

module.exports = PictureIndex;
