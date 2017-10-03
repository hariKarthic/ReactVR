import React, {PureComponent} from "react";

import {Text, View, Pano, asset} from "react-vr";

import Movie from "../components/Movie";

export default class MovieScene extends PureComponent {


    constructor(props) {
        super(props);
    }

    render() {
        return (<View>
            <Pano source={asset("/panos/buildingpano.jpg")}>

                <Text style={{
                    backgroundColor: "#00dded", color: "#000", textAlign: "center",
                    layoutOrigin: [0.5, 0.5],
                    fontSize: 1,
                    textAlignVertical: "center",
                    transform: [{translate: [0, 0, -3]}]
                }}>Movie</Text>
                <Movie/>
            </Pano>

        </View>);
    }
}