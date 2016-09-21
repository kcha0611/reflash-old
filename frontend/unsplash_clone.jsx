const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const SessionActions = require('./actions/session_actions');
const App = require('./components/app.jsx');
const LoginForm = require('./components/login_form');
const SignupForm = require('./components/signup_form');

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={LoginForm}/>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/pictures" component={PictureIndex}>
    </Route>
  </Router>
)

document.addEventListener("DOMContentLoaded", () => {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  const root = document.getElementById("root");
  ReactDOM.render(router, root);
})
