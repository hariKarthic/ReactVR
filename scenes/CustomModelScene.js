/***
 * NOTE:
 * Support only for PNG or JPEG images .
 * Skybox support limited or non - existent
 */

import React, {Component} from "react";
import {View, Model, asset, AmbientLight, Pano, PointLight} from "react-vr";

import Floor from "../components/Floor";


export default class CustomModelScene extends Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (<Pano style={{tintColor: "aliceblue"}}>
            <AmbientLight intensity={1}/>
            <PointLight intensity={1} decay={2}
                        style={{
                            opacity: 0.5,
                            color: "white",
                            transform: [{translate: [0, 500, 700]}]
                        }}/>

            <Model lit={true} style={{transform: [{translate: [0, -1.5, -10]}, {scale:1}]}}
                   source={{
                       obj: asset("/models/CartoonTree.obj"),
                       mtl: asset("/models/CartoonTree.mtl")
                   }}/>

            <Model lit={true} style={{transform: [{translate: [2, -1.5, -16]}, {scale:1}]}}
                   source={{
                       obj: asset("/models/CartoonTree.obj"),
                       mtl: asset("/models/CartoonTree.mtl")
                   }}/>
            <Model lit={true} style={{transform: [{translate: [-10, -1.5, -13]}, {scale:1}]}}
                   source={{
                       obj: asset("/models/CartoonTree.obj"),
                       mtl: asset("/models/CartoonTree.mtl")
                   }}/>

            <Model lit={true} style={{transform: [{translate: [7, -1.5, -9]}, {scale:1}]}}
                   source={{
                       obj: asset("/models/CartoonTree.obj"),
                       mtl: asset("/models/CartoonTree.mtl")
                   }}/>
        </Pano>);

    }
}