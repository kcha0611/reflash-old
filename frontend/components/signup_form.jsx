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
    $('#inner-main-wrap').hide();
    this._error = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.loggedIn = SessionStore.addListener(this.renderPicIfLoggedIn);
  },
  componentWillUnmount: function() {
    $('#inner-main-wrap').show();
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
  goHome() {
    hashHistory.push("/pictures");
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
      <div className="login-form-wrap">
        <form onSubmit={this._handleSubmit} className="inner-login-wrap">
          <div className="login-img-wrap">
            <img src="https://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_70,w_70/v1477692420/camera-flash-512_fosqnc_xex6ag.png" className="login-img" onClick={this.goHome}/>
          </div>
          <h2>Join</h2>
          <h4 className="login-welcome">Be a part of Reflash.</h4>
          <input value={this.state.username} type="text" onChange={this._handleUsernameChange} placeholder="Username" className="username-input"/>
          <input value={this.state.password} type="password" onChange={this._handlePasswordChange} placeholder="Password" className="password-input"/>
          <input value={this.state.f_name} type="text" onChange={this._handleFName} placeholder="First Name" className="fname-input"/>
          <input value={this.state.l_name} type="text" onChange={this._handleLName} placeholder="Last Name" className="lname-input"/>
          <div>{this.handleErrors()}</div>
          <input type="submit" value="SignUp" className="login-btn"/>
          <text className="policy">By joining, you agree to the Terms and Privacy Policy</text>
          <p>Already a member? <Link to="/">Login!</Link></p>
      </form>
    </div>
    )
  }
});

module.exports = SignupForm
