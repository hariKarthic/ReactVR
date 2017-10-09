import React from "react";

import PropTypes from "prop-types";

import {VrButton, View, Text} from "react-vr";

export default class BackButton extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{flex: 1, layoutOrigin: [0.5, 0.5], transform: [{translateZ: -3}]}}>
            <VrButton style={{width: 0.5}}>
                <Text>To Lobby</Text>
            </VrButton>

        </View>);
    }
}


BackButton.propTypes = {
    onBack: PropTypes.func
};