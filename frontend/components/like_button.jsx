const React = require('react');

const LikeButton = React.createClass({
  getInitialState: function() {
    return {
      liked: false
    };
  },
  _onClick(e) {
    e.preventDefault();
    this.setState({liked: true})
  },
  render() {
    const likeButton = this.state.liked ? "Liked" : "Like";
    return (
      <button onClick={this._onClick} disabled={this.state.liked}>{likeButton}</button>
    )
  }
})

module.exports = LikeButton
