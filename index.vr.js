import React from "react";

import {
    AppRegistry,
} from "react-vr";

import FirstView from "./components/FirstView";
import DefaultView from "./components/DefaultView";


export default class ReactVR extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scene: "default"
        };
    }


    render() {

        let scene = <DefaultView/>;
        if (this.state.scene === "scene1") {
            scene = <FirstView/>;
        } else if (this.state.scene === "scene2") {
            scene = <FirstView/>;
        }

        return scene;
    }
}

AppRegistry.registerComponent("ReactVR", () => ReactVR);
