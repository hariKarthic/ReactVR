
/**
 * Custom Module to handle objects that arent provided out of the box by ReactVR
 *
 * For Eg: Here we are creating a 'CubeModules' which will have methods and utilities that act upon the ThreeJS cube we created
 * earlier in our client.js
 * */


import { Module } from 'react-vr-web';


export default class CubeModule extends Module {
    constructor(){
        super('CubeModule');
    }

    init(cube){
      this.cube = cube;
    }
}
