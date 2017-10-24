import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Plane, asset} from "react-vr";

/**
 * TODO: Set Floor to a more appealing posittion. Find out good coordinates for floor.Find a way to repeat textures across the floor
 *
 * */

export default class Floor extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (  <Plane dimWidth={100} dimHeight={100} lit={true}
                         texture={asset(this.props.textureUrl)}
                         style={{
                             layoutOrigin: [0.5, 0.5]
                             , transform: [{rotateX: -88}, {translate: [0, 5, -5]}]
                         }}/>);

    }
}

Floor.propTypes = {
    textureUrl: PropTypes.string
};


Floor.defaultProps = {
    textureUrl: "/textures/floortexture.jpg"
};