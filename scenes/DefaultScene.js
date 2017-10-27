import React, {Component} from "react";
import {Text, View, asset, Box, Pano, AmbientLight} from "react-vr";
import ReactNativeComponentTree from "react-native/Libraries/Renderer/src/renderers/native/ReactNativeComponentTree";

import PropTypes from "prop-types";


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

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    _onInput(event) {
        let nativeInputEvent = event.nativeEvent.inputEvent;
        let prop_id = ReactNativeComponentTree.getInstanceFromNode(event.target)._currentElement.props.id;
        if (nativeInputEvent.type === "MouseInputEvent" && nativeInputEvent.eventType === "click") {
            if (prop_id === "redbox") {
                this.props.onViewChange("pano");
            } else if (prop_id === "bluebox") {
                this.props.onViewChange("anim");
            } else if (prop_id === "videobox") {
                this.props.onViewChange("panomovie");
            } else if (prop_id === "custombox") {
                this.props.onViewChange("custom");
            } else {
                this.props.onViewChange("movie");
            }
        }
    }


    render() {
        return (
            <Pano style={{tintColor: "#373737"}}>
                <View style={{
                    width: 11,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    transform: [{translateX: -4.5}]
                }}>
                    <AmbientLight intensity={1}/>
                    <View style={
                        {
                            backgroundColor: "cadetblue",
                            width: 2,
                            borderWidth: 0.05,
                            borderColor: "ghostwhite",
                            margin: 0.1,
                            height: 1,
                            transform: [{translate: [0, 2, -3]}]

                        }
                    }>
                        <Text style={{
                            color: "black",
                            fontSize: 0.2,
                            textAlign: "center",
                            textAlignVertical: "center",
                            padding: 0.2,
                        }}>
                            Movie Time
                        </Text>
                    </View>
                    <Box
                        onInput={this._onInput} id="bluebox" name="bluebox"
                        lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateY: this.state.rotation}]}}
                        texture={asset("/textures/blue.jpg")}
                    />

                    <View style={
                        {
                            backgroundColor: "firebrick",
                            width: 2,
                            borderWidth: 0.05,
                            borderColor: "ghostwhite",
                            margin: 0.1,
                            height: 1,
                            transform: [{translate: [0, 2, -3]}]

                        }
                    }>
                        <Text style={{
                            color: "black",
                            fontSize: 0.2,
                            textAlign: "center",
                            textAlignVertical: "center",
                            padding: 0.2,
                        }}>
                            Panorama
                        </Text>
                    </View>

                    <Box id="redbox" name="redbox"
                         onInput={this._onInput}
                         lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateX: this.state.rotation}]}}
                         texture={asset("/textures/red.jpg")
                         }/>


                    <View style={
                        {
                            backgroundColor: "gold",
                            width: 2,
                            borderWidth: 0.05,
                            borderColor: "whitesmoke",
                            margin: 0.1,
                            height: 1,
                            transform: [{translate: [0, 2, -3]}]

                        }
                    }>
                        <Text style={{
                            color: "black",
                            fontSize: 0.2,
                            textAlign: "center",
                            textAlignVertical: "center",
                            padding: 0.2,
                        }}>
                            Animation with Primitives
                        </Text>
                    </View>
                    <Box id="yellowbox" name="yellowbox"
                         onInput={this._onInput}
                         lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateY: this.state.rotation}]}}
                         texture={asset("/textures/yellow.jpg")}
                    />

                    <View style={
                        {
                            backgroundColor: "chartreuse",
                            width: 2,
                            borderWidth: 0.05,
                            borderColor: "whitesmoke",
                            margin: 0.1,
                            height: 1,
                            transform: [{translate: [0, 2, -3]}]

                        }
                    }>
                        <Text style={{
                            color: "black",
                            fontSize: 0.2,
                            textAlign: "center",
                            textAlignVertical: "center",
                            padding: 0.2,
                        }}>
                            Pano Video
                        </Text>
                    </View>
                    <Box id="videobox"
                         onInput={this._onInput}
                         lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateY: this.state.rotation}]}}
                         texture={asset("/textures/green.png")}
                    />

                    <View style={
                        {
                            backgroundColor: "violet",
                            width: 2,
                            borderWidth: 0.05,
                            borderColor: "whitesmoke",
                            margin: 0.1,
                            height: 1,
                            transform: [{translate: [0, 2, -3]}]

                        }
                    }>
                        <Text style={{
                            color: "black",
                            fontSize: 0.2,
                            textAlign: "center",
                            textAlignVertical: "center",
                            padding: 0.2,
                        }}>
                            Custom Models
                        </Text>
                    </View>
                    <Box id="custombox"
                         onInput={this._onInput}
                         lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateY: this.state.rotation}]}}
                         texture={asset("/textures/pink.png")}
                    />

                    <Floor textureUrl={"/textures/floortexture.jpg"}/>

                </View></Pano>);
    }


}


DefaultView.propTypes = {
    onViewChange: PropTypes.func
};