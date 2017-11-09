
import React from 'react';

const NativeMethodsMixin = require('NativeMethodsMixin');
const LayoutAndTransformPropTypes = require('LayoutAndTransformPropTypes');
const ReactNativeViewAttributes = require('ReactNativeViewAttributes');
const requireNativeComponent = require('requireNativeComponent');

import {Text, View, asset, Box, Pano} from "react-vr";

import PropTypes from 'prop-types';


const Particle = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    ...View.propTypes,
  },

  viewConfig: {
    uiViewClassName: 'ParticleEffect',
    validAttributes: {
      ...ReactNativeViewAttributes.RCTView,
      intensity: true,
    },
  },

  getDefaultProps: function() {
    return {};
  },

  render: function() {
    return (
      <RKParticle/>
    );
  },
});

const RKParticle = requireNativeComponent('Particle', Particle, {
  nativeOnly: {},
});

module.exports = Particle;