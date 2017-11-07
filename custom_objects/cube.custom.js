import * as THREE from "three";


    const _cube = new THREE.Mesh(
    new THREE.ConeGeometry( 0.5, 1 ),
    new THREE.MeshBasicMaterial({color:"#ff0000"})
  );
  _cube.position.z = -4;
  _cube.position.x = 2;

export default _cube;