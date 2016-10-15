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
    let pictures = PictureStore.all();
    let that = this
    pictures.map( (picture) => {
      if (picture.subject == that.state.searchInput.toLowerCase()) {
        debugger
        that.state.searchedPictures.push(picture);
      }
    });
    // this.setState({searchedPictures: [], searchInput: ""})
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
            <input type="submit" onClick={this._handleSubmit} placeholder="Search" />
          </FormGroup>
        </Navbar.Form>
        {this.state.searchedPictures.map ( (pic) => {
          return (<img src={pic.picture_url}></img>)
        })
      }
    </div>
    )
  }
});

module.exports = SearchBar;
