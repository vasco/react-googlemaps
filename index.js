"use strict";

var assign = require('Object.assign');
var ReactDefaultInjection = require('./src/ui/ReactDefaultInjection');
var ReactMapComponents = require('./src/ReactMapComponents');
var MapPropTypes = require('./src/ui/MapPropTypes');

ReactDefaultInjection.inject();

module.exports = assign(
  {},
  ReactMapComponents,
  {
    PropTypes: MapPropTypes
  }
);
