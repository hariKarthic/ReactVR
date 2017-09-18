import { PerspectiveCamera } from "three";

const VIEW_ANGLE = 45;
const ASPECT = document.body.clientWidth / document.body.clientHeight;
const NEAR = 0.1;
const FAR = 10000;


const camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

camera.id = "Custom3JSCamera";

export default camera;

