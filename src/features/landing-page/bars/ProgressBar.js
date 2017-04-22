import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VisibilitySensor from 'react-visibility-sensor';

export default class ProgressBar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {width: 0};
  }

  onVisibleChange = (isVisible) => {
    if(isVisible) {
      setTimeout(() => {this.setState({width: this.props.width})}, 100);
    }
  }

  render() {
    let styles = {width: this.state.width};

    return(
    <div className="progress-item">
      <div className="progress-title">{this.props.title}</div>
      <div className="progress">
        <div className="progress-bar progress-bar-brand" aria-valuenow="60" role="progressbar" aria-valuemin="0" aria-valuemax="100" style={styles}><span className="pb-number-box"><span className="pb-number"></span>%</span></div>
        <VisibilitySensor onChange={this.onVisibleChange} />
      </div>
    </div>
  );
  }


}
