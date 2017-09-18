import React, {Component} from "react";
import {View, Pano, Sound, asset, Text} from "react-vr";

export default class FirstView extends Component {
    constructor(props) {
        super(props);
    }


    onTextEnter(...args) {
        console.log("Entered Text");
    }

    onTextExit(...args) {
        console.log("Exited Text");
    }

    render() {
        return (
            <View>
                <Pano source={asset("pano-valley.jpg")}/>
                <Sound source={{uri: "../static_assets/sounds/Wind.mp3"}}/>
                <Text onEnter={this.onTextEnter} onExit={this.onTextExit} style={{
                    fontSize: 0.8,
                    layoutOrigin: [0.5, 0.5],
                    textAlign: "center",
                    textAlignVertical: "center",
                    transform: [{translate: [0, 0, -3]}]
                }}>
                    Some Text here
                </Text>

            </View>
        );
    }
}