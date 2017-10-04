import React, {PureComponent} from "react";

import {Text, View, Pano, asset} from "react-vr";

import Movie from "../components/Movie";

export default class MovieScene extends PureComponent {


    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={{flex:1}}>
            <Pano source={asset("/panos/buildingpano.jpg")}>

                <Text style={{
                    backgroundColor: "#00dded", color: "#000", textAlign: "center",
                    layoutOrigin: [0.5, 0.5],
                    fontSize: 1,
                    textAlignVertical: "center",
                    transform: [{translate: [0, 0, -3]}]
                }}>Movie</Text>
                <View style={{
                    flex: 1, width: 5, flexDirection: "column", alignItems: "strech", backgroundColor: "#333333",
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [0, 0, -5]}]
                }}>
                    <Movie/>

                </View>
            </Pano>

        </View>);
    }
}