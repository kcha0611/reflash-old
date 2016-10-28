const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const ErrorStore = require('../stores/error_store');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const LoginForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: ""
    };
  },
  componentDidMount: function() {
    if (window.location.pathname == "/") {
      $('#inner-main-wrap').hide()
    }
    this._error = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.loggedIn = SessionStore.addListener(this.renderPicIfLoggedIn);
  },
  componentWillUnmount: function() {
    this._error.remove();
    this.loggedIn.remove();
  },
  renderPicIfLoggedIn: function () {
    if (SessionStore.checkLoggedIn()) {
      hashHistory.push('/pictures')
    }
  },
  formType: function() {
    return this.props.location.pathname.slice(1)
  },
  handleErrors: function() {
    let errors = ErrorStore.errors("login");
    let errorMessages = errors.map((message, index) => {
      return <li key={index}>{message}</li>
    })
    return (<ul>{errorMessages}</ul>);
  },
  _handleUsernameChange: function(e) {
    this.setState({username: e.target.value})
  },
  _handlePasswordChange: function(e) {
    this.setState({password: e.target.value})
  },
  _handleSubmit: function(e) {
    e.preventDefault();
    SessionActions.logIn({username: this.state.username, password: this.state.password});
  },
  _guestLogin: function(e) {
    e.preventDefault();
    SessionActions.logIn({username: "Guest", password: "123456"})
  },
  render: function() {
    return (
    <div className="login-form-wrap">
      <form onSubmit={this._handleSubmit} className="inner-login-wrap">
        <div className="login-img-wrap">
          <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_70,w_70/v1477692420/camera-flash-512_fosqnc_xex6ag.png" className="login-img"/>
        </div>
        <h2>Login</h2>
        <h4 className="login-welcome">Welcome Back.</h4>
        <input type="submit" value="Guest Login" onClick={this._guestLogin} className="guest-login-btn"/>
        <p className="or">OR</p>
        <input value={this.state.username} type="text" onChange={this._handleUsernameChange} placeholder="Username" className="username-input"/>
        <input value={this.state.password} type="password" onChange={this._handlePasswordChange} placeholder="Password" className="password-input"/>
        <div>{this.handleErrors()}</div>
        <input type="submit" value="Login" className="login-btn"/>
        <text>New to the site? <Link to="/signup">Join</Link></text>
      </form>
    </div>
  )
  }
});

module.exports = LoginForm
