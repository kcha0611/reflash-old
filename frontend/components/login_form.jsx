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
        <input value={this.state.username} type="text" onChange={this._handleUsernameChange} placeholder="Username" className="username-input"/>
        <input value={this.state.password} type="password" onChange={this._handlePasswordChange} placeholder="Password" className="password-input"/>
        <div>{this.handleErrors()}</div>
        <input type="submit" value="Login" />
        <text>New to the site?</text>
        <Link to="/signup">Sign Up!</Link>
        <input type="submit" value="Guest Login" onClick={this._guestLogin} />
      </form>
    </div>
  )
  }
});

module.exports = LoginForm
