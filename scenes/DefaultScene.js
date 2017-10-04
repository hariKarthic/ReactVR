import React, {Component} from "react";
import {Text, View, asset, Box, Model, AmbientLight} from "react-vr";
import PropTypes from "prop-types";

import Floor from "../components/Floor";

export default class DefaultView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rotation: 0,
            textColor: "red"
        };

        this._onInput = this._onInput.bind(this);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _onInput(event) {
        let nativeInputEvent = event.nativeEvent.inputEvent;
        console.log(event.nativeEvent);
        if (nativeInputEvent.type === "MouseInputEvent" && nativeInputEvent.eventType === "click") {
            if (event.nativeEvent.target === 6) {
                this.props.onViewChange("scene1");
            } else if (event.nativeEvent.target === 7) {
                this.props.onViewChange("scene4");
            } else {
                this.props.onViewChange("scene3");
            }
        }
    }


    render() {
        return (

            <View style={{backgroundColor: "#fff"}}>
                <AmbientLight intensity={1}/>
                <Box
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [-2.5, -1, -3]}, {rotateY: this.state.rotation}]}}
                    texture={asset("/textures/blue.jpg")}
                />

                <Box
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [0, -1, -3]}, {rotateX: this.state.rotation}]}}
                    texture={asset("/textures/red.jpg")
                    }/>


                <Box
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [2.5, -1, -3]}, {rotateY: this.state.rotation}]}}
                    texture={asset("/textures/yellow.jpg")}
                />

                <Floor textureUrl={"/textures/floortexture.jpg"}/>

            </View>);
    }


}


DefaultView.propTypes = {
    onViewChange: PropTypes.func
};