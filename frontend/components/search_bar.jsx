const React = require('react');
const PictureStore = require('../stores/picture_store');
const PictureActions = require('../actions/picture_actions');
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const FormGroup = require('react-bootstrap').FormGroup;
const Navbar = require('react-bootstrap').Navbar;
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ReactBootstrap = require('react-bootstrap');
const NavItem = ReactBootstrap.NavItem;
const Nav = ReactBootstrap.Nav;
const SessionActions = require('../actions/session_actions');
const Link = ReactRouter.Link;
const SessionStore = require('../stores/session_store');
const Modal = ReactBootstrap.Modal;
const Button = ReactBootstrap.Button;

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      searchInput: "",
      pictures: [],
      show: false
    };
  },
  componentDidMount: function() {
    this.pictureListener = PictureStore.addListener(this.getSearchedPictures)
    SessionStore.addListener(this.forceUpdate.bind(this))
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
  checkLoggedIn() {
    if (!SessionStore.checkLoggedIn()) {
      this.showModal()
    }
    else {
      hashHistory.push("/pictures/create")
    }
  },
  _logOut() {
    SessionActions.logOut();
  },
  showModal() {
    this.setState({show: true})
  },
  showCollections() {
    hashHistory.push('/users/collections')
  },
  showHome() {
    hashHistory.push("/pictures")
  },
  showNewPictures() {
    hashHistory.push("/new")
  },
  hideModal() {
    this.setState({show: false})
  },
  render() {
    let filteredPictures;
    filteredPictures = this.state.pictures.filter( (pic) => {
      if (this.state.searchInput !== "") {
       return pic.subject.toLowerCase().indexOf(this.state.searchInput.toLowerCase()) !== -1
     }
    })
    if (filteredPictures.length !== 0) {
      $('.pic-index-wrap').hide()
    }
    else {
      $('.pic-index-wrap').show()
    }
    let logOut;
    if (SessionStore.checkLoggedIn()) {
      logOut = (<button onClick={this._logOut} className="logout-btn">LogOut</button>)
    }
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
            <Nav id="inner-tabs-wrap">
              <NavItem key={3} href="" onClick={this.showHome}>Home</NavItem>
              <NavItem key={4} href="" onClick={this.showNewPictures}>New</NavItem>
              <NavItem key={5} href="" onClick={this.showCollections}>Collections</NavItem>
              <a href="javascript:void(0)" className="new-photo-link" onClick={this.checkLoggedIn}>Submit Photo</a>
              {logOut}
          </Nav>
        <h1 className="search-input">{this.state.searchInput}</h1>
          <div className="search-result-wrap">
            {filteredPictures.map ( (picture) => {
              return <img src={picture.picture_url} className="pic-index-item" onClick={function() {hashHistory.push(`/pictures/${picture.id}`)}}/>
            })
          }
        </div>
        <div className="new-photo-modal">
          <Modal bsSize="large" show={this.state.show} onHide={this.hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>Welcome to Reflash</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="root-modal-p">If you haven't already, please <Link to="/signup">SignUp</Link> to submit a photo! Or just <Link to="/">Login!</Link></p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.hideModal}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
    </div>
    )
  }
});

module.exports = SearchBar;
