import React, {PureComponent} from "react";
import {View, PointLight, AmbientLight, asset, Box, Cylinder, Sphere} from "react-vr";


import Floor from "../components/Floor";

export default class ThirdScene extends PureComponent {

    constructor(props) {
        super(props);

    }


    render() {


        return (<View>
            <PointLight decay={2} style={
                {
                    transform: [{translate: [0, 2, -5]}, {rotateZ: -45}]
                }
            } intensity={1}/>
            <AmbientLight intensity={1}/>

            <Cylinder
                style={{transform: [{translate: [0, -1.5, -5]}]}}
                texture={asset("/textures/blue.jpg")} lit={true}
                radiusTop={0.5}
                radiusBottom={0.5}
                dimHeight={2}
                segments={12}
            />

            <Sphere lit={true} wireframe={true}
                    radius={0.5}
                    style={{transform: [{translate: [2, 1, -5]}]}}

                    widthSegments={20}
                    heightSegments={12}

            />
            <Cylinder color={"red"} lit={true}
                      texture={asset("/textures/red.jpg")}
                      style={{transform: [{translate: [1.5, -1.5, -5]}]}}
                      radiusTop={0}
                      radiusBottom={1}
                      dimHeight={2}
                      segments={12}
            />
            <Box lit={true} texture={asset("/textures/yellow.jpg")} style={{transform: [{translate: [-1.5, -1.5, -5]}]}}
                 dimWidth={1} dimDepth={1}
                 dimHeight={1}/>
            <Floor/>

        </View>);
    }
}