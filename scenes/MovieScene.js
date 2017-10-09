import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {Text, View, Pano, asset} from "react-vr";

import MoviePlayer from "../components/MoviePlayer";
import BackButton from "../components/BackButton";

export default class MovieScene extends PureComponent {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Pano source={asset("/panos/outdoor.jpg")}>
                <BackButton/>
                <View style={{
                    flex: 1,
                    flexDirection: "column",
                    layoutOrigin: [0.5, 0.5],
                    justifyContent: "space-around",
                    alignItems: "center"
                }}>

                    <View style={{
                        backgroundColor: "aquamarine", width: 1, transform: [{translate: [0, 0, -5]}]
                    }}>
                        <Text style={{
                            flex: 1,
                            color: "#000", textAlign: "center",
                            fontSize: 0.2,
                            textAlignVertical: "center",
                        }}>Movie</Text>
                    </View>
                    <MoviePlayer movieData={this.props.movieData}/>
                </View></Pano>);
    }
}

MovieScene.propTypes = {
    movieData: PropTypes.string
};