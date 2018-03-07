import React from "react";
import axios from "react-native-axios";


import {
    AppRegistry,
} from "react-vr";

import PanoScene from "./scenes/PanoScene";
import DefaultScene from "./scenes/DefaultScene";
import CustomModelScene from "./scenes/CustomModelScene";
import AnimationScene from "./scenes/AnimationScene";
import PanoVideoScene from "./scenes/PanoVideoScene";

import MovieScene from "./scenes/MovieScene";

export default class ReactVR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scene: "default",
            movieData: null
        };

    }

    componentDidMount() {
        axios.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=IN&key=AIzaSyAK5HZ_j5WS1M2brpgrsGj6EDeEwTwHHEc").then((resp) => {
            console.log(resp);
        }).catch((err) => {
            console.log(err);
        });
    }

    _onViewChange(value) {
        this.setState({scene: value});
    }


    render() {

        let scene = <DefaultScene onViewChange={(value) => this._onViewChange(value)}/>;
        if (this.state.scene === "pano") {
            scene = <PanoScene onViewChange={(value) => this._onViewChange(value)}/>;
        } else if (this.state.scene === "custom") {
            scene = <CustomModelScene onViewChange={(value) => this._onViewChange(value)}/>;
        } else if (this.state.scene === "anim") {
            scene = <AnimationScene/>;
        } else if (this.state.scene === "movie") {
            scene = <MovieScene movieData={this.state.movieData}/>;
        } else if (this.state.scene === "panomovie") {
            scene = <PanoVideoScene/>;
        }

        return scene;
    }
}

AppRegistry.registerComponent("ReactVR", () => ReactVR);
