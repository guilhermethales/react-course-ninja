'use strict';

import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    }
    this.timer;
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        Timer: { this.state.time }
      </div>
    )
  }
}

export default Timer;