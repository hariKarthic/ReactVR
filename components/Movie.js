import React, {Purecomponent} from "react";

import {View, Video} from "react-vr";


const Movie = () => {
    return (
        <View>
            <Video poster={{uri: "../static_assets/textures/blue.jpg"}}/>
        </View>
    );
};

export default Movie;