import * as ReactVR from 'react-vr-web';
import {VRInstance} from 'react-vr-web';
import {Module} from 'react-vr-web';
import * as THREE from 'three';
import * as OVRUI from 'ovrui';

export default class RCTParticle extends ReactVR.RCTBaseView {

  constructor(guiSys: GuiSys) {
        super();
        let starsGeometry = new THREE.Geometry();
    	this.view = new OVRUI.UIView(guiSys);
		for ( var i = 0; i < 10000; i ++ ) {

			var star = new THREE.Vector3();
			star.x = THREE.Math.randFloatSpread( 2000 );
			star.y = THREE.Math.randFloatSpread( 2000 );
			star.z = THREE.Math.randFloatSpread( 2000 );

			starsGeometry.vertices.push( star );

		}	
	const starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );
	const starField = new THREE.Points( starsGeometry, starsMaterial );
	this.view.add(starField);

    }

}