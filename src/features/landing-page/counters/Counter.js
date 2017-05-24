import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

export default class Counter extends Component {

  static propTypes = {
    to: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { counter: 0, intervalId: 0, visibleActive: true }
    this.isMount = false;
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  onVisibleChange = (isVisible) => {
    if(isVisible && this.state.visibleActive && this.isMount) {
      this.setState({visibleActive: false});
      this.incrementNumbers();
    }
  }

  incrementNumber = () => {
    if(this.state.counter >= this.props.to) {
      clearInterval(this.state.intervalId);
      return;
    }

    if(this.isMount)
      this.setState({counter: this.state.counter + 1});
  }

  incrementNumbers = () => {
    if(!this.isMount) return;

    let intervalId = setInterval(this.incrementNumber, 1000 / this.props.to);
    this.setState({intervalId: intervalId});
  }

  render() {
    return(
      <div className="counter h6">
      <VisibilitySensor onChange={this.onVisibleChange} active={this.state.visibleActive} />
        <div className="counter-number">
          <div className="counter-timer">{ this.state.counter }</div>
        </div>
        <div className="counter-title">{ this.props.title }</div>
      </div>
    );
  }
}
