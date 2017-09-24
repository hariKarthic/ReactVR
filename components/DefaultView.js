import React, {Component} from "react";
import {Text, View, Plane, AmbientLight} from "react-vr";

export default class DefaultView extends Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            rotation: 0,
            textColor: "red"
        };
    }

    _onPress(event) {

        console.log(event);

    }


    render() {
        return (

            <View style={{backgroundColor: "#fff"}}>
                <AmbientLight intensity={1}/>
                <Plane dimWidth={10}
                       dimHeight={10}
                       onInput={(event) => {
                           console.log(event.type);

                       }}
                       lit={true}
                       style={{
                           color: "#ff2728",
                           transform: [{translate: [-20, 0, -50]}, {rotateZ: this.state.rotation}, {scale: 1}]
                       }}>
                </Plane>
                <Plane dimWidth={10}
                       dimHeight={10}
                       lit={true}
                       style={{
                           color: "#ff424d",
                           transform: [{translate: [20, 0, -50]}, {rotateZ: this.state.rotation}, {scale: 1}]
                       }}>
                </Plane>
                <Plane dimWidth={500} dimHeight={500} lit={true}
                       style={{
                           layoutOrigin: [0.5, 0.5]
                           , transform: [{rotateX: -80}, {translate: [0, 30, -50]}]
                       }}/>
                <Text style={{
                    color: this.state.textColor,
                    fontSize: 0.2,
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: "center",
                    textAlignVertical: "center",
                    transform: [{translate: [0, 1, -3]}]
                }} onExit={() => {
                    this.props.onViewChange("scene2");
                    this.setState({textColor: "blue"});
                }}
                      onEnter={() => this.setState({textColor: "green"})}>
                    Welcome
                </Text>
            </View>);
    }


}