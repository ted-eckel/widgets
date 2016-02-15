var React = require('react');

var Tabs = React.createClass({
  getInitialState: function() {
    return {clicked: 0};
  },
  clicked: function(index) {
    this.setState({clicked: index});
  },
  render: function() {
    var self = this;

    var menuItems = this.props.items.map(function(tab, index) {
      var style = '';
      if(self.state.clicked === index) {
        style = 'clicked';
      }
      return <li className={style} onClick={self.clicked.bind(self, index)}>{tab}</li>;
    });

    return (
      <div>
        <ul>
          {menuItems}
        </ul>
        <p>{this.props.content[this.state.clicked]}</p>
      </div>
    );
  }
});

module.exports = Tabs;
