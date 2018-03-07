// Auto-generated content.
// This file contains the boilerplate to set up your React app.
// If you want to modify your application, start in "index.vr.js"

// Auto-generated content.

import * as THREE from "three";
import {VRInstance} from "react-vr-web";
import camera from "./../camera.vr";
import * as SimpleRayCaster from "../raycaster.vr";

import scene from "../custom_objects/scene.custom.js";
import cone from "../custom_objects/cube.custom.js";


//scene.add(cone); /*adding the custom cube to the scene*/


const init = (bundle, parent, options) => {
    const vr = new VRInstance(bundle, "ReactVR", parent, {
        // Add custom options here
        camera: camera, /*Passing custom camera to the VRInstance*/
        raycasters: [
            SimpleRayCaster
        ],
        scene:scene,/*Adding the custom scene which has the custom THREEJS cube*/
        cursorVisibility: "auto",
        ...options,
    });
    vr.render = function () {
        // Any custom behavior you want to perform on each frame goes here
    };
    // Begin the animation loop
    vr.start();
    return vr;
};


window.ReactVR = {init};
