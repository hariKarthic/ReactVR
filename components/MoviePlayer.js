import React from "react";
import {View} from "react-vr";
import PropTypes from "prop-types";


import Movie from "./Movie";


export default class MoviePlayer extends React.Component {


    constructor(props) {
        super(props);
    }


    render() {
        return(<View>
            <Movie streamURI={this.props.streamURI}/>
        </View>);
    }

}

MoviePlayer.propTypes = {
    streamURI: PropTypes.string
};

MoviePlayer.defaultProps = {
    streamURI: "https://www.youtube.com/watch?v=B3hlqsBY0Qk"
};