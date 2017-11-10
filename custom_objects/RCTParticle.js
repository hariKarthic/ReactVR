import * as ReactVR from "react-vr-web";
import * as THREE from "three";
import * as OVRUI from "ovrui";

import type {GuiSys} from "ovrui";


export default class RCTParticle extends ReactVR.RCTBaseView {

    constructor(guiSys: GuiSys) {
        super();
        let starsGeometry = new THREE.Geometry();

        this.view = new OVRUI.UIView(guiSys);
        for (let i = 0; i < 10000; i++) {

            let star = new THREE.Vector3();
            star.x = THREE.Math.randFloatSpread(2000);
            star.y = THREE.Math.randFloatSpread(2000);
            star.z = THREE.Math.randFloatSpread(2000);
            starsGeometry.vertices.push(star);

        }
        const starsMaterial = new THREE.PointsMaterial({size: 10, color: "#fff"});
        let starField = new THREE.Points(starsGeometry, starsMaterial);
        this.view.add(starField);

        /*Assigning custom rotate property*/
        Object.defineProperty(
            this.props,
            "rotationX",
            ({
                set: value => {
                    starField.rotation.x = value;
                },
            }: Object)
        );

    }


    static describe() {
        return Object.assign({}, super.describe(), {
            NativeProps: {
                rotationX: "number",
            }

        });
    }


}