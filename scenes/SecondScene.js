import React, {Component} from "react";
import {View, Pano, Plane, Model, asset, PointLight} from "react-vr";


export default class SecondScene extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View>
            <PointLight intensity={1} decay={2}/>
            <Pano source={{
                uri: [
                    "../static_assets/textures/lake1_rt.jpg",
                    "../static_assets/textures/lake1_lf.jpg",
                    "../static_assets/textures/lake1_up.jpg",
                    "../static_assets/textures/lake1_dn.jpg",
                    "../static_assets/textures/lake1_ft.jpg",
                    "../static_assets/textures/lake1_bk.jpg",
                ]
            }}/>


            <Model lit={true} style={{transform: [{translate: [0, 0.2, -5]}, {scale: 0.2}]}}
                   texture={asset("/textures/Rock-Texture-Surface.jpg")} source={{obj: asset("/models/Rock1.obj"),}}/>
        </View>);

    }
}