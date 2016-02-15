var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Autocomplete = React.createClass({
  getInitialState: function() {
    return {searchString: ''};
  },
  handleChange: function(e) {
    this.setState({searchString: e.target.value});
  },
  render: function() {
    var users = this.props.items,
      searchString = this.state.searchString.trim().toLowerCase();
    if (searchString.length > 0) {
      users = users.filter(function(u){
        return u.toLowerCase().match( searchString );
      });
    }
    var userResults = users.map(function(user){
      return <li key={user}>{user}</li>;
    });
    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange} placeholder="Type here" />
        <ul>
          <ReactCSSTransitionGroup
            transitionName="auto"
            transitionEnterTimeout = {500}
            transitionLeaveTimeout = {500}>
          {userResults}
        </ReactCSSTransitionGroup>
        </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
