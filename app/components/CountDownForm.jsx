var React = require('react');
var CountDownForm = React.createClass({
  onSubmitSeconds: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    if(strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountDown(parseInt(strSeconds, 10));
    }
  },
  render: function() {
    return (
      <div>
         <form onSubmit={this.onSubmitSeconds}>
           <input type="text" ref="seconds" placeholder="Enter time in seconds"></input>
           <button className="button expanded">Start</button>
         </form>
      </div>
    );
  }
});

module.exports = CountDownForm;
