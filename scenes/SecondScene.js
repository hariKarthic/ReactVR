/***
 * NOTE:
 * Support only for PNG or JPEG images .
 * Skybox support limited or non - existent
 */

import React, {Component} from "react";
import {View, Model, asset, AmbientLight} from "react-vr";

import Floor from "../components/Floor";


export default class SecondScene extends Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (<View>
            <AmbientLight intensity={1}/>

            <Model lit={true} style={{transform: [{translate: [1, -1, -20]}]}}
                   source={{
                       obj: asset("/models/part.obj"),
                       mtl: asset("/models/part.mtl")
                   }}/>

            <Floor textureUrl={"/textures/lowpolyfloor.png"}/>
        </View>);

    }
}