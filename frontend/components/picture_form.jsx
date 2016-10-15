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
    PictureActions.createPicture({picture_url: this.state.picture_url, subject: this.state.subject})
    debugger
    hashHistory.push('/pictures');
  },
  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <input type="text" onChange={this.subjectChange} placeholder="Enter Picture Subject"/>
          <input type="submit" placeholder="Post a Picture"/>
          <button onClick={this.updateImage}>Upload Picture</button>
        </form>
        <img src={this.state.picture_url}/>
      </div>
    )
  }
});

module.exports = PictureForm;
