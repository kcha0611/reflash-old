const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const React = require('react');
const PictureIndexItem = require('./picture_index_item');

const NewPicturesIndex = React.createClass({
  getInitialState() {
    return {pictures: []}
  },
  componentDidMount() {
    this.allPics = PictureStore.addListener(this.getPictures);
    PictureActions.fetchPictures();
  },
  getPictures() {
    let filteredPictures = PictureStore.all().sort( (function(first, second) {
      return new Date(first.created_at).getTime() - new Date(second.created_at).getTime()
    })
  )
    this.setState( {pictures: filteredPictures} )
  },
  componentWillUnmount() {
    this.allPics.remove();
  },
  render() {
    let allPictures = this.state.pictures.map( (pic) => {
      return (<img src={pic.picture_url} className="pic-index-item"/>)
    });
    return (
      <div className="pic-index-wrap">
        <ul className="pic-index-ul">
          <div className="inner-index-wrap">
            {allPictures}
          </div>
        </ul>
      </div>
    )
  }
})

module.exports = NewPicturesIndex;
