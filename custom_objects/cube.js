import * as THREE from "three";

import CubeModule from "../nativeobjects/CubeModule";

/*Create a cube and a scene*/

const scene = new THREE.Scene();

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial()
);

cube.position.z = -4;
scene.add(cube);


const cubeModule = new CubeModule();

cubeModule.init(cube);

export default cubeModule;
