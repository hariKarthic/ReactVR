import {View, Video, asset} from "react-vr";
import React, {PureComponent} from "react";

class Movie extends PureComponent {
    render() {
        return (
            <View style={{margin: 0.1, height: 2}}>
                <Video style={{height: 2}} source={asset("/videos/fireplace.mp4")}
                       poste={asset("/textures/lowpoly.png")}/>
            </View>
        );

    }
}

export default Movie;