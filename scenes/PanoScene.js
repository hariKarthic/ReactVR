import React, {Component} from "react";
import {View, Pano, asset, Sound, Text} from "react-vr";


/**
 * TODO: Hover over farm and show sometext,
 * TODO: Find out positional audio*/
export default class PanoScene extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <Pano source={asset("/panos/pano-valley.jpg")}/>
                <Sound loop={true} source={{mp3: asset("/sounds/windbreeze.mp3")}} volume={1}/>
                <Text style={{
                    color: "#fcf000",
                    backgroundColor:"#000",
                    border:"1px",
                    fontSize: 0.5,
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: "center",
                    textAlignVertical: "center",
                    transform: [{translate: [0, 0, -3]}]
                }}>
                   Uphill Farms
                </Text>

                <Sound loop={true} source={{mp3: asset("/sounds/sheepbleet.mp3")}} volume={0.5}/>
                <Sound  source={{wav: asset("/sounds/eagle.wav")}} volume={1}/>

            </View>
        );
    }
}