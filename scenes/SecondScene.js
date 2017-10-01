/***
 * NOTE:
 * Support only for PNG or JPEG images .
 * Skybox support limited or non - existent
 */

import React, {Component} from "react";
import {View, Pano, Plane, Model, asset, AmbientLight, PointLight} from "react-vr";


export default class SecondScene extends Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (<View>
            <AmbientLight intensity={1}/>
            <Model lit={true} style={{transform: [{translate: [0, 0, -10]}]}}
                   texture={asset("/textures/doortexture.jpg")}
                   source={{
                       obj: asset("/models/door.obj"),
                   }}/>


        </View>);

    }
}