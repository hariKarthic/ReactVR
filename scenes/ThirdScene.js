import React, {PureComponent} from "react";
import {Pano, PointLight, AmbientLight, Animated, VrSoundEffects, asset, Text, View, Box, Sphere} from "react-vr";


import {Easing} from "react-native";


import Floor from "../components/Floor";


const SOUND_BALLDROP = asset("/sounds/ball_bounce.wav");

export default class ThirdScene extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            translateYValue: new Animated.Value(2),
            rotateYValue: new Animated.Value(0),
            scenetype: 1
        };
    }


    _spinAnimation() {
        this.state.rotateYValue.setValue(0);
        Animated.timing(this.state.rotateYValue, {
            toValue: 360,
            duration: 2000,
            easing: Easing.linear,
        }).start(() => this._spinAnimation());
    }

    _dropAnimation() {
        // this.state.translateYValue.setValue(2);
        Animated.spring(this.state.translateYValue, {
            toValue: -1.7,
            friction: 2,
            delay: 1500,
            tension: 20,
        }).start((...args) => {
            console.log(args);
            VrSoundEffects.play(SOUND_BALLDROP);
        });
    }

    _pullUpAnimation() {
        this.state.translateYValue.setValue(-1.7);
        Animated.timing(this.state.translateYValue, {
            toValue: 2,
            duration: Math.floor(Math.random() * (2000 - 1000) + 1000),
            easing: Easing.linear,
        }).start(() => this._dropAnimation());
    }

    componentDidMount() {
        VrSoundEffects.load(SOUND_BALLDROP);
        this._dropAnimation();
        this._spinAnimation();
    }

    _onInput(event) {

        let nativeInputEvent = event.nativeEvent.inputEvent;
        console.log(nativeInputEvent);
        if (event.nativeEvent.target === 25) {
            this.state.scenetype === 1 ?
                this.setState({scenetype: 2}) : this.setState({scenetype: 1});
        }

    }


    render() {

        const AnimatedBox = Animated.createAnimatedComponent(Box);

        const AnimatedSphere = Animated.createAnimatedComponent(Sphere);

        const rotateYSpin = this.state.rotateYValue.interpolate({
            inputRange: [0, 360],
            outputRange: ["0deg", "360deg"]
        });

        /*Using a Pano to set background color*/
        return (
            <Pano style={{tintColor: "#E4F8FF"}}>
                <PointLight decay={2}
                            style={
                                {
                                    transform: [{translate: [0, 10, -5]}, {rotateZ: -45}]
                                }
                            }
                            intensity={2}/>
                <AmbientLight intensity={1}/>

                <View onInput={this._onInput.bind(this)} style={{
                    backgroundColor: "#1247cc",
                    layoutOrigin: [0.5, 0.5],
                    transform: [{translate: [Math.floor(Math.random() * (10 - 1) + 1), 0, -2]}]
                }}>
                    <Text style={{
                        textTransform: "capitalize",
                        fontSize: 0.2,
                        padding: 0.2,
                        textAlign: "center",
                        textAlignVertical: "center",
                        color: "#000"
                    }}>{this.state.scenetype}</Text>
                </View>

                {this.state.scenetype === 2 && Array.apply(undefined, new Array(20)).map((i, index) => {
                    return (

                        <AnimatedBox key={`wow${index}`}
                                     lit={true}
                                     wireframe={false}
                                     texture={asset("/textures/yellow.jpg")}
                                     style={
                                         {transform: [{translate: [Math.floor(Math.random() * (20) - 10), Math.floor(Math.random() * (20) - 10), Math.floor(Math.random() * (20) - 10)]}, {rotateX: rotateYSpin}]}
                                     }
                                     dimWidth={1}
                                     dimDepth={1}
                                     dimHeight={1}/>

                    );
                })}


                {this.state.scenetype === 1 && Array.apply(undefined, new Array(20)).map((item, index) => {
                    return (
                        <AnimatedSphere
                            wireframe={false}
                            key={index}
                            lit={true}
                            texture={asset("/textures/red.jpg")}
                            widthSegments={20}
                            heightSegments={12}
                            radius={0.5}
                            style={{transform: [{translateY: this.state.translateYValue}, {translateZ: Math.floor(Math.random() * (20) - 10)}, {translateX: Math.floor(Math.random() * (20) - 10)}]}}
                        />
                    );

                })}

            </Pano>);
    }
}