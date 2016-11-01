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
      <div className="main-pic-form-wrap">
        <form onSubmit={this._submit} className="inner-pic-form-wrap">
          <input type="text" onChange={this.subjectChange} placeholder="Enter Picture Subject" className="subject-input"/>
          <button onClick={this.updateImage} className="submit-pic-btn">Upload Picture</button>
          <input type="submit" placeholder="Post a Picture" className="post-pic-btn"/>
          <img src={this.state.picture_url} className="pre-picture"/>
        </form>
      </div>
    )
  }
});

module.exports = PictureForm;
