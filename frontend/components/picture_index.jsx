const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const React = require('react');
const PictureIndexItem = require('./picture_index_item');

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
      return (<PictureIndexItem key={index} pic={pic} />)
    });
    return (
      <div>
        <ul>
          {allPictures}
        </ul>
      </div>
    )
  }
});

module.exports = PictureIndex;
