const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormGroup = require('react-bootstrap').FormGroup;
const Navbar = require('react-bootstrap').Navbar;

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchInput: "",
      pictures: [],
      searchedPictures: []
    };
  },
  componentDidMount: function() {
    this.pictureListener = PictureStore.addListener(this.getSearchedPictures)
    PictureActions.fetchPictures();
  },
  getSearchedPictures: function() {
    this.setState({pictures: PictureStore.all()})
  },
  componentWillUnmount: function() {
    this.pictureListener.remove()
  },
  handleChange: function(e) {
    e.preventDefault();
    this.setState({searchInput: e.target.value});
  },
  _handleSubmit: function(e) {
    e.preventDefault();
    let filteredPictures = this.state.pictures.filter( (pic) => {
      return pic.subject.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
    })
    this.setState({searchInput: "", pictures: [], searchedPictures: filteredPictures})
  },
  render() {
    return (
      <div id="search-bar-id">
        <Navbar.Form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search Pictures"
              value={this.state.value}
              onChange={this.handleChange}
              id="search-input"
              />
        <button onClick={this._handleSubmit}>Search</button>
          </FormGroup>
        </Navbar.Form>
        {this.state.searchedPictures.map ( (picture, index) => {
          return <img src={picture.picture_url} className="pic-index-item"/>
        })
      }
    </div>
    )
  }
});

module.exports = SearchBar;
