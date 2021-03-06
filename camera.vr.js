import { PerspectiveCamera } from "three";

const VIEW_ANGLE = 60;
const ASPECT = document.body.clientWidth / document.body.clientHeight;
const NEAR = 0.1;
const FAR = 10000;


const camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

camera.name = "Custom3JSCamera";

camera.position.set(0,0,5);


console.log(camera.toJSON());
export default camera;

