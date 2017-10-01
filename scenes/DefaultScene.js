import React, {Component} from "react";
import {Text, View, Plane, asset, Model,AmbientLight} from "react-vr";

import Floor from "../components/Floor";

export default class DefaultView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rotation: 0,
            textColor: "red"
        };

        this._onInput = this._onInput.bind(this);
    }

    _onInput(event) {
        let nativeInputEvent = event.nativeEvent.inputEvent;
        console.log(event.nativeEvent);
        if (nativeInputEvent.type === "MouseInputEvent" && nativeInputEvent.eventType === "click") {
            console.log("ClickeD!!!!");
            if (event.nativeEvent.target === 6) {
                this.props.onViewChange("scene1");
            } else if (event.nativeEvent.target === 7) {
                this.props.onViewChange("scene2");
            }
        }
    }


    render() {
        return (

            <View style={{backgroundColor: "#fff"}}>
                <AmbientLight intensity={1}/>
             {/*   <Plane dimWidth={10}
                       dimHeight={10}
                       onInput={this._onInput}
                       lit={true}
                       style={{
                           color: "#ff2728",
                           transform: [{translate: [-20, 0, -50]}, {rotateZ: this.state.rotation}, {scale: 1}]
                       }}>
                </Plane>*/}
                <Model
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [-2.5, -1.5, -5]}]}}
                       texture={asset("/textures/doortexture.jpg")}
                       source={{
                           obj: asset("/models/door.obj"),
                       }}/>

                <Model
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [2, -1.5, -5]}]}}
                    texture={asset("/textures/doortexture.jpg")}
                    source={{
                        obj: asset("/models/door.obj"),
                    }}/>

             {/*   <Plane dimWidth={10}
                       dimHeight={10}
                       lit={true}
                       onInput={this._onInput}
                       style={{
                           color: "#ff424d",
                           transform: [{translate: [20, 0, -50]}, {rotateZ: this.state.rotation}, {scale: 1}]
                       }}>
                </Plane>*/}
                <Floor textureUrl={"/textures/floortexture.jpg"}/>
                <Text style={{
                    color: this.state.textColor,
                    fontSize: 0.2,
                    paddingLeft: 0.2,
                    paddingRight: 0.2,
                    textAlign: "center",
                    textAlignVertical: "center",
                    transform: [{translate: [-1, 0, -3]}]
                }} onExit={() => {
                    this.setState({textColor: "blue"});
                }}
                      onEnter={() => this.setState({textColor: "green"})}>
                    Welcome
                </Text>
            </View>);
    }


}