import React from "react";
import {VideoPano, VideoControl, View, MediaPlayerState, asset} from "react-vr";


export default class PanoVideoScene extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            playerState: new MediaPlayerState({autoplay: false, muted: false})
        };
    }

    render() {
        return (<View><VideoPano playerState={this.state.playerState} source={asset("/videos/london_bridge.mp4")}
                                 loop={true}/>
                <VideoControl playerState={this.state.playerState}
                              style={{
                                  height: 0.4,
                                  width: 2.5,
                                  layoutOrigin: [0.5, 0.5],
                                  transform: [{translate: [0, 0, 0]}]
                              }}/>
            </View>
        );
    }
}