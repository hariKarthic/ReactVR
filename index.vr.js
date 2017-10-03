import React from "react";

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
            scene: "default"
        };
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
            scene = <MovieScene/>;
        }

        return scene;
    }
}

AppRegistry.registerComponent("ReactVR", () => ReactVR);
