import {View, Video, asset} from "react-vr";
import React, {PureComponent} from "react";
import { WebView } from 'react-native';

class Movie extends PureComponent {
    render() {
        return (
            <View style={{margin: 0.1, borderWidth: 0.2, borderColor: "white", transform: [{translateZ: -5}]}}>
                <Video crossorigin={true} style={{height: 5, width: 10}} source={{uri: this.props.streamURI}}
                       poster={asset("/textures/lowpoly.png")}/>
            </View>
        );

    }
}

export default Movie;