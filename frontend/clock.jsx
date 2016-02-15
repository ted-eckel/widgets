var React = require('react');

var Clock = React.createClass({
  getInitialState: function() {
    return { time: new Date() };
  },
  tick: function() {
    this.setState({ time: new Date() } );
  },
  componentDidMount: function () {
    this.clock = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function () {
   clearInterval(this.clock);
  },
  render: function() {
    var date = this.state.time.toDateString();
    var time = this.state.time.toTimeString();
      return <div><p>{date}</p>
      <p>{time}</p>
      </div>;
    }
});

module.exports = Clock;
