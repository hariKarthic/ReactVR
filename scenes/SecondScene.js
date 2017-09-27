import React, {Component} from "react";
import {View, Plane, Model, asset, PointLight} from "react-vr";


export default class SecondScene extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (<View>
            <PointLight intensity={1} decay={2}/>
            <Plane dimWidth={500} dimHeight={500} lit={true}
                   style={{
                       layoutOrigin: [0.5, 0.5]
                       , transform: [{rotateX: -80}, {translate: [0, 30, -50]}]
                   }}/>
            <Model
                lit={true}
                style={{
                    transform: [{translate: [0, 0.2, -5]}, {scale: 0.2}]
                }}
                texture={asset("/textures/Rock-Texture-Surface.jpg")}

                source={{
                    obj: asset("/models/Rock1.obj"),
                }}/>

        </View>);

    }
}