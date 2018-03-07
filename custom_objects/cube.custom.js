import * as THREE from "three";


const _cone = new THREE.Mesh(
    new THREE.ConeGeometry(0.5, 1),
    new THREE.MeshBasicMaterial({color: "#ff0000"})
);
_cone.position.z = -4;
_cone.position.x = 2;

export default _cone;
