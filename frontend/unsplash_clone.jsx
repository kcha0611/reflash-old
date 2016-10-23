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
const PictureIndex = require('./components/picture_index');
const IndexRoute = ReactRouter.IndexRoute;
const PictureShow = require('./components/picture_show');
const PictureForm = require('./components/picture_form');
const UserPictureIndex = require('./components/user_pictures');

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={LoginForm}></IndexRoute>
      <Route path="/signup" component={SignupForm}/>
      <Route path="/pictures" component={PictureIndex} />
      <Route path="/pictures/create" component={PictureForm} />
      <Route path="/pictures/:pictureId" component={PictureShow} />
      <Route path="/users/collections" component={UserPictureIndex} />
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
