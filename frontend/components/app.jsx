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
  render() {
    return (
      <div>
        <div id="inner-main-wrap">
          <Navbar id="navbar-wrap">
                    <Nav key={1} id="navbar-inner-wrap">
                        <SearchBar />
                    </Nav>
          </Navbar>
          <h1 className="main-title">ReFlash</h1>
          <div className="main-phrase-wrap">
            <p className="main-phrase">Free <a href="https://unsplash.com/license" className="main-link">(do whatever you want)</a> high resolution photos.</p><br/>
            <p className="main-phrase">A project by <a href="https://www.linkedin.com/in/kencha" className="main-link">Me</a></p>
          </div>
        </div>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App;
