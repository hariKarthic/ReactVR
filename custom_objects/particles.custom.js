import * as THREE from 'three';

let starsGeometry = new THREE.Geometry();

for ( var i = 0; i < 10000; i ++ ) {

	var star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 2000 );
	star.y = THREE.Math.randFloatSpread( 2000 );
	star.z = THREE.Math.randFloatSpread( 2000 );

	starsGeometry.vertices.push( star );

}

const starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

const starField = new THREE.Points( starsGeometry, starsMaterial );


export default starField;