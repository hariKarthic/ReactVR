import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Plane, asset} from "react-vr";

export default class Floor extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        return (  <Plane dimWidth={50} dimHeight={50} lit={true}
                         texture={asset(this.props.textureUrl)}
                         style={{
                             layoutOrigin: [0.5, 0.5]
                             , transform: [{rotateX: -88}, {translate: [0, 5, -5]}]
                         }}/>);

    }
}

Floor.propTypes = {
    textureUrl : PropTypes.string
};