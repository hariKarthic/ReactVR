import React, {PureComponent} from "react";
import {View, PointLight, AmbientLight, Animated, asset, Box, Cylinder, Sphere} from "react-vr";

import {Easing} from "react-native";

import Floor from "../components/Floor";

export default class ThirdScene extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            translateValue: new Animated.Value(2),
            rotateYValue: new Animated.Value(0)
        };
    }

    _spinAnimation() {
        this.state.rotateYValue.setValue(0);
        Animated.timing(this.state.rotateYValue, {
            toValue: 360,
            duration: 1000,
            easing: Easing.linear,
        }).start(() => this._spinAnimation());
    }

    _dropAnimation() {
        this.state.translateValue.setValue(2);
        Animated.spring(this.state.translateValue, {
            toValue: -1.7,
            friction: 3,
            tension: 2
        }).start((...args) => this._pullUpAnimation());
    }

    _pullUpAnimation() {
        this.state.translateValue.setValue(-1.7);
        Animated.timing(this.state.translateValue, {
            toValue: 2,
            duration: 1000,
            easing: Easing.linear,
        }).start(() => this._dropAnimation());
    }

    componentDidMount() {
        this._dropAnimation();
        this._spinAnimation();
    }


    render() {

        const AnimatedBox = Animated.createAnimatedComponent(Box);

        const AnimatedSphere = Animated.createAnimatedComponent(Sphere);

        const rotateYSpin = this.state.rotateYValue.interpolate({
            inputRange: [0, 360],
            outputRange: ["0deg", "360deg"]
        });


        return (<View>
            <PointLight decay={2}
                        style={
                            {
                                transform: [{translate: [0, 2, -5]}, {rotateZ: -45}]
                            }
                        }
                        intensity={1}/>
            <AmbientLight intensity={1}/>

            <Cylinder
                style={{transform: [{translate: [0, -1.5, -5]}]}}
                texture={asset("/textures/blue.jpg")}
                lit={true}
                radiusTop={0.5}
                radiusBottom={0.5}
                dimHeight={2}
                segments={12}
            />

            <AnimatedSphere lit={true}
                            wireframe={false}
                            texture={asset("/textures/red.jpg")}
                            radius={0.5}
                            style={{transform: [{translateY: this.state.translateValue}, {translateZ: -3}, {translateX: 2.5}]}}
                            widthSegments={20}
                            heightSegments={12}

            />

            <AnimatedBox lit={true}
                         wireframe={false}
                         texture={asset("/textures/yellow.jpg")}
                         style={
                             {transform: [{translateY: 2}, {translateZ: -3}, {rotateY: rotateYSpin}]}
                         }
                         dimWidth={1}
                         dimDepth={1}
                         dimHeight={1}/>
            <Floor/>

        </View>);
    }
}