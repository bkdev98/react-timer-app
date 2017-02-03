var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass ({
  getInitialState: function () {
    return {
      count: 0,
      timeStatus: 'stopped'
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timeStatus !== prevState.timeStatus) {
      switch (this.state.timeStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count;
      this.setState({
        count: newCount + 1
      });
    }, 1000);
  },
  handleSetTimer: function (seconds) {
    this.setState({
      time: seconds,
      timeStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({timeStatus: newStatus});
  },
  render: function () {
    var {count, timeStatus} = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls timeStatus={timeStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
