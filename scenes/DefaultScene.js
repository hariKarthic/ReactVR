import React, {Component} from "react";
import {Text, View, asset, Box, Model, AmbientLight} from "react-vr";
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
        console.log(event.nativeEvent);
        if (nativeInputEvent.type === "MouseInputEvent" && nativeInputEvent.eventType === "click") {
            if (event.nativeEvent.target === 14) {
                this.props.onViewChange("scene1");
            } else if (event.nativeEvent.target === 9) {
                this.props.onViewChange("scene5");
            } else {
                this.props.onViewChange("scene3");
            }
        }
    }


    render() {
        return (

            <View style={{
                width: 10,
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
                        textAlignVertical:"center",
                        padding: 0.2,
                    }}>
                        Movie Time
                    </Text>
                </View>
                <Box
                    onInput={this._onInput}
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
                        textAlignVertical:"center",
                        padding: 0.2,
                    }}>
                        Panorama
                    </Text>
                </View>

                <Box
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateX: this.state.rotation}]}}
                    texture={asset("/textures/red.jpg")
                    }/>


                <View style={
                    {
                        backgroundColor: "gold",
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
                        textAlignVertical:"center",
                        padding: 0.2,
                    }}>
                        Animation with Primitives
                    </Text>
                </View>
                <Box
                    onInput={this._onInput}
                    lit={true} style={{transform: [{translate: [-1, -1, -3]}, {rotateY: this.state.rotation}]}}
                    texture={asset("/textures/yellow.jpg")}
                />

                <Floor textureUrl={"/textures/floortexture.jpg"}/>

            </View>);
    }


}


DefaultView.propTypes = {
    onViewChange: PropTypes.func
};