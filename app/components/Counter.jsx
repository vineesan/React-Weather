var React = require('react');
var Clock = require('Clock')
var CountDownForm = require('CountDownForm');
var Counter = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    };
  },
  handelSetCountDown: function(seconds) {
    this.setState({
      count: seconds
    });
  },
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <h2 className="text-center page-tilte">Counter</h2>
        <Clock totalSeconds={count}/>
        <CountDownForm onSetCountDown={this.handelSetCountDown}/>
      </div>
    );
  }
});

module.exports = Counter;
