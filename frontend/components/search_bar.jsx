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
      searchInput: ""
    };
  },
  componentDidMount: function() {
    this.pictureListener = PictureActions.fetchPictures();
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
    PictureActions.getSearchedPictures({searchInput: this.state.searchInput});
    this.setState({searchInput: ""})
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
            <button onClick={this._handleSubmit} className="input-search-bar"/>
          </FormGroup>
        </Navbar.Form>
    </div>
    )
  }
});

module.exports = SearchBar;
