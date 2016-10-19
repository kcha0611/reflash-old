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
      searchedPictures: [],
      counter: false
    };
  },
  componentDidMount: function() {
    this.pictureListener = PictureStore.addListener(this.getSearchedPictures)
  },
  getSearchedPictures: function() {
    this.setState({pictures: PictureStore.all()})
  },
  componentWillUnmount: function() {
    this.pictureListener.remove()
  },
  handleChange: function(e) {
    e.preventDefault();
    this.setState({searchInput: e.target.value})
  },
  render() {
    let filteredPictures;
    filteredPictures = this.state.pictures.filter( (pic) => {
      if (this.state.searchInput !== "") {
       return pic.subject.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
     }
    })
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
          </FormGroup>
        </Navbar.Form>
        <h1 className="search-input">{this.state.searchInput}</h1>
        <div className="search-result-wrap">
          {filteredPictures.map ( (picture) => {
            return <img src={picture.picture_url} className="pic-index-item" onClick={function() {hashHistory.push(`/pictures/${picture.id}`)}}/>
          })
        }
      </div>
    </div>
    )
  }
});

module.exports = SearchBar;
