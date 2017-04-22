import React, { Component } from 'react';

import './scroll-top.css';

export default class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = { display: false }
  }

  showButton = () => {
    let { display } = this.state;

    if(window.scrollY > 100) {
      if(display) return;

      this.setState({display: true})
    } else {
      if(!display) return;

      this.setState({display: false})
    }
  }

  scrollStep = () => {
    if(window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }

    window.scroll(0, window.pageYOffset - 50)

  }

  scrollToTop = () => {
    let intervalId = setInterval(this.scrollStep, 16.66);
    this.setState({intervalId: intervalId});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.showButton);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showButton);
  }

  render() {
    return (
      <button className={"scroll-top " + (this.state.display ? 'show' : '')} onClick={() => { this.scrollToTop() } }><i className="fa fa-angle-up"></i></button>
    );
  }
}
