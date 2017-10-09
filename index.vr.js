import React from "react";
import axios from "react-native-axios";


import {
    AppRegistry,
} from "react-vr";

import FirstScene from "./scenes/FirstScene";
import DefaultScene from "./scenes/DefaultScene";
import SecondScene from "./scenes/SecondScene";
import ThirdScene from "./scenes/ThirdScene";

import MovieScene from "./scenes/MovieScene";

export default class ReactVR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scene: "default",
            movieData: null
        }
        ;

    }

    componentDidMount() {
        console.log("Going to make Async calls!!");
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
        if (this.state.scene === "scene1") {
            scene = <FirstScene onViewChange={(value) => this._onViewChange(value)}/>;
        } else if (this.state.scene === "scene2") {
            scene = <SecondScene onViewChange={(value) => this._onViewChange(value)}/>;
        } else if (this.state.scene === "scene3") {
            scene = <ThirdScene/>;
        } else if (this.state.scene === "scene4") {
            scene = <MovieScene movieData={this.state.movieData}/>;
        }

        return scene;
    }
}

AppRegistry.registerComponent("ReactVR", () => ReactVR);
