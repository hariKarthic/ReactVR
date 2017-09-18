import React, {Component} from "react";
import {Text, View, Plane} from "react-vr";

export default class DefaultView extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (<View>
            <Plane dimWidth={10}
                   dimHeight={10}
                   lit={true}>
            </Plane>
            <Text style={{
                backgroundColor: "#777879",
                fontSize: 0.2,
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.2,
                paddingRight: 0.2,
                textAlign: "center",
                textAlignVertical: "center",
                transform: [{translate: [0, 0, -3]}]
            }}>
                Welcome
            </Text>
        </View>);
    }


}