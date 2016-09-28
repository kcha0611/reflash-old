const React = require('react');
const ReactBootstrap = require('react-bootstrap');
const Navbar = ReactBootstrap.Navbar;
const NavItem = ReactBootstrap.NavItem;
const Nav = ReactBootstrap.Nav;

const App = React.createClass({
  render() {
    return (
      <div>
        <Navbar id="navbar-wrap">
                  <Nav key={1} id="navbar-inner-wrap">
                      <NavItem key={2} href="/" id="resplash-home-img" className="resplash-home-img"><img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,q_100,w_50/v1475032603/camera-flash-512_fosqnc.png" className="resplash-img"/></NavItem>
                        <NavItem key={3} href="">Home</NavItem>
                        <NavItem key={4} href="">New</NavItem>
                        <NavItem key={5} href="">Collections</NavItem>
                  </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }

})

module.exports = App;
