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

    _onViewChange(value) {
        this.setState({scene: value});
    }


    render() {

        let scene = <DefaultView onViewChange={(value) => this._onViewChange(value)}/>;
        if (this.state.scene === "scene1") {
            console.log("Painting scene one");
            scene = <FirstView onViewChange={() => this._onViewChange()}/>;
        } else if (this.state.scene === "scene2") {
            console.log("painting scene two");
            scene = <FirstView onViewChange={() => this._onViewChange()}/>;
        }

        return scene;
    }
}

AppRegistry.registerComponent("ReactVR", () => ReactVR);
