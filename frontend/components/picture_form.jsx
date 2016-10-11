const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Link = ReactRouter.Link;
const PictureActions = require('../actions/picture_actions');

const PictureForm = React.createClass({
  getInitialState: function() {
    return {
      picture_url: "",
      subject: ""
    };
  },
  subjectChange: function(e) {
    e.preventDefault();
    this.setState({subject: e.target.value});
  },
  updateImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results){
     if (!error) {
       let newUrl = results[0].url
        this.setState({ picture_url: newUrl });
      }
    }.bind(this));
  },
  _submit(e) {
    e.preventDefault();
    PictureActions.createProject({picture_url: this.state.picture_url, subject: this.state.subject})
  },
  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <input placeholder="Subject"/>
          <button onClick={this.updateImage}>Post a Picture</button>
        </form>
      </div>
    )
  }
});

module.exports = PictureForm;
