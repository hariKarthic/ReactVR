import React, {Component} from "react";
import {View, Pano, asset, Sound, Text} from "react-vr";

export default class FirstScene extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Pano source={asset("/panos/pano-valley.jpg")}/>
                <Sound source={{mp3: asset("/sounds/windbreeze.mp3")}} volume={1}/>
                <Text style={{
                    color: "#0f7b38",
                    fontSize: 0.5,
                    layoutOrigin: [0.5, 0.5],
                    textAlign: "center",
                    textAlignVertical: "center",
                    transform: [{translate: [0, 0, -3]}]
                }}>
                    Inuit,Norway
                </Text>

            </View>
        );
    }
}