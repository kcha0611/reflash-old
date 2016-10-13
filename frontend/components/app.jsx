const React = require('react');
const ReactBootstrap = require('react-bootstrap');
const Navbar = ReactBootstrap.Navbar;
const NavItem = ReactBootstrap.NavItem;
const Nav = ReactBootstrap.Nav;
const SearchBar = require('./search_bar');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Link = ReactRouter.Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const App = React.createClass({
  _logOut() {
    SessionActions.logOut();
  },
  render() {
    let logOut;
    if (SessionStore.checkLoggedIn()) {
      logOut = (<button onClick={this._logOut}>LogOut</button>)
    }
    return (
      <div>
        <Navbar id="navbar-wrap">
                  <Nav key={1} id="navbar-inner-wrap">
                      <NavItem key={2} href="/" id="resplash-home-img" className="resplash-img"><img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,q_100,w_50/v1475032603/camera-flash-512_fosqnc.png" className="resplash-img"/></NavItem>
                      <SearchBar />
                        <Nav id="inner-tabs-wrap">
                          <NavItem key={3} href="">Home</NavItem>
                          <NavItem key={4} href="">New</NavItem>
                          <NavItem key={5} href="">Collections</NavItem>
                        </Nav>
                      <Link to="pictures/create">Submit Photo</Link>
                      {logOut}
                  </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App;
