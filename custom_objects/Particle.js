import React from "react";

const NativeMethodsMixin = require("NativeMethodsMixin");
const ReactNativeViewAttributes = require("ReactNativeViewAttributes");
const requireNativeComponent = require("requireNativeComponent");


import PropTypes from "prop-types";


export default class Particle extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillReceiveProps(newProps) {
        console.log("component receiving props");
    }

    componentWillUpdate(nextProps) {
        console.log("component will update", nextProps);
    }


    render() {
        return (
            <RKParticle/>
        );
    }

}


Particle.propTypes = {
    rotationX: PropTypes.number
};

Particle.defaultProps = {
    rotationX: 10
};

/*    Particle = React.createClass({
        mixins: [NativeMethodsMixin],

        propTypes: {
            ...View.propTypes,
            rotationX: PropTypes.number,
        },

        viewConfig: {
            uiViewClassName: "ParticleEffect",
            validAttributes: {
                ...ReactNativeViewAttributes.RCTView,
                rotationX: true,
            },
        },

        getDefaultProps: function () {
            return {
                rotationX: 10
            };
        },

        render: function () {
            return (
                <RKParticle/>
            );
        },
    });

    */
const RKParticle = requireNativeComponent("Particle", Particle, {
    nativeOnly: {},
});