import React from "react";

import {
    AppRegistry,
} from "react-vr";

import FirstScene from "./scenes/FirstScene";
import DefaultScene from "./scenes/DefaultScene";
import SecondScene from "./scenes/SecondScene";

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
            console.log("Painting scene one");
            scene = <FirstScene onViewChange={() => this._onViewChange()}/>;
        } else if (this.state.scene === "scene2") {
            console.log("painting scene two");
            scene = <SecondScene onViewChange={() => this._onViewChange()}/>;
        }

        return scene;
    }
}

AppRegistry.registerComponent("ReactVR", () => ReactVR);
