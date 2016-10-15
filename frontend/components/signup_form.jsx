const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const ErrorStore = require('../stores/error_store');
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');

const SignupForm = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password: "",
      f_name: "",
      l_name: ""
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
      hashHistory.push("/pictures");
    }
  },
  _handleUsernameChange: function(e) {
    this.setState({username: e.target.value})
  },
  _handlePasswordChange: function(e) {
    this.setState({password: e.target.value})
  },
  _handleSubmit: function(e) {
    e.preventDefault();
    SessionActions.signUp(this.state);
  },
  _guestLogin: function(e) {
    e.preventDefault();
    SessionActions.logIn({username: "Guest", password: "123456"})
  },
  _handleFName: function(e) {
    this.setState({f_name: e.target.value})
  },
  _handleLName: function(e) {
    this.setState({l_name: e.target.value})
  },
  formType: function() {
    return this.props.location.pathname.slice(1)
  },
  handleErrors: function() {
    let errors = ErrorStore.errors("signup");
    let errorMessages = errors.map((message, index) => {
      return <li key={index}>{message}</li>
    })
    return (<ul>{errorMessages}</ul>);
  },
  render: function() {
    return (
      <form onSubmit={this._handleSubmit}>
        <input value={this.state.username} type="text" onChange={this._handleUsernameChange} placeholder="Username" />
        <input value={this.state.password} type="password" onChange={this._handlePasswordChange} placeholder="Password" />
        <input value={this.state.f_name} type="text" onChange={this._handleFName} placeholder="First Name" />
        <input value={this.state.l_name} type="text" onChange={this._handleLName} placeholder="Last Name" />
        <div>{this.handleErrors()}</div>
        <input type="submit" value="SignUp" />
        <text>Welcome</text>
        <Link to="/login">Login!</Link>
    </form>)
  }
});

module.exports = SignupForm
