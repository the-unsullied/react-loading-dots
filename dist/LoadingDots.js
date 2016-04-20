'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Component that animates three dots
@class Loading Dots Component
@param {boolean} isAnimating triggers animation
@param {string} dotClass other class names that need to be added to the dot
*/

exports.default = _react2.default.createClass({
  getDefaultProps: function getDefaultProps() {
    return {
      isAnimating: false,
      dotClass: ''
    };
  },

  propTypes: {
    isAnimating: _react2.default.PropTypes.bool,
    dotClass: _react2.default.PropTypes.string
  },

  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)("loading-dots", { 'loading-dots--animated': this.props.isAnimating }, this.props.classes) },
      _react2.default.createElement('div', { className: (0, _classnames2.default)("loading-dots__dot loading-dots__dot--1", this.props.dotClass) }),
      _react2.default.createElement('div', { className: (0, _classnames2.default)("loading-dots__dot loading-dots__dot--2", this.props.dotClass) }),
      _react2.default.createElement('div', { className: (0, _classnames2.default)("loading-dots__dot loading-dots__dot--3", this.props.dotClass) })
    );
  }
});
module.exports = exports['default'];
