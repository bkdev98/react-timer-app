var React = require('react');
var Clock = require('Clock');

var Countdown = React.createClass({
  render: () => {
    return (
      <div>
        <Clock totalSeconds={167}/>
      </div>
    );
  }
});

module.exports = Countdown;
