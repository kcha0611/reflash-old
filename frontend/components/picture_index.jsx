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
  render() {
    let allPictures = this.state.pictures.map( (pic, index) => {
      return (<PictureIndexItem key={index} pic={pic} className="picture-index-item"/>)
    });
    return (
      <div className="pic-index-wrap">
        <ul className="pic-index-ul">
          <div className="tab-wrap">
            <a id="normal-tab">normal</a>
            <a id="grid-tab">grid</a>
          </div>
          {allPictures}
        </ul>
      </div>
    )
  }
});

module.exports = PictureIndex;
