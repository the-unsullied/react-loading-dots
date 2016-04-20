/**
Component that animates three dots
@class Loading Dots Component
@param {boolean} isAnimating triggers animation
@param {string} dotClass other class names that need to be added to the dot
*/

import React from 'react';
import classnames from 'classnames';

export default React.createClass({
  getDefaultProps: function() {
    return {
      isAnimating: false,
      dotClass: ''
    };
  },

  propTypes: {
    isAnimating: React.PropTypes.bool,
    dotClass: React.PropTypes.string
  },

  render() {
    return <div className={classnames("loading-dots", {'loading-dots--animated': this.props.isAnimating}, this.props.classes)}>
      <div className={classnames("loading-dots__dot loading-dots__dot--1", this.props.dotClass)}></div>
      <div className={classnames("loading-dots__dot loading-dots__dot--2", this.props.dotClass)}></div>
      <div className={classnames("loading-dots__dot loading-dots__dot--3", this.props.dotClass)}></div>
    </div>
  }
});
