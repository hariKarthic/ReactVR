###  ReactVR Trials

------
Some models,scenes and some primitive animation trials.


Demo can be found [here on Heroku](https://react-we-are.herokuapp.com/index.html)


WebVR seems to work properly in [Firefox Nightly](https://www.mozilla.org/en-US/firefox/58.0a1/releasenotes/) on desktops.Kindly download that.

Clone or download the repository and 
 `npm install`
 &&
`npm start`


** Build and Deploying

Using heroku for deploying, one caveat is that you have to trick heroku into accepting the app as one of the presets that heroku has.Hence the extra PHP file that is present inside the `build` folder.

Steps:
* run `npm build` you should get a `build` folder in your root directory.
* copy your index.html into your `build` folder and make sure you have changed the script references in the index.html.
* copy all your static assets into a `static_assets` folder inside `build` folder or whatever is the folder name you had chosen while developement.
* deploy to your remote heroku instance.


**Resource Links** 
* Panoramas : https://www.flickr.com/search/?text=equirectangular&license=7%2C9%2C10
* Skyboxes : http://www.custommapmakers.org/skyboxes.php
* Models and Materials : https://free3d.com/
* Textures : https://sketchfab.com

**Attributions**

* Sheep sounds - http://soundbible.com/1662-Farm.html
* Eagle sounds - http://soundbible.com/1487-Eaglet-Bird-2.html
* Building Pano - https://www.flickr.com/photos/117457333@N04/
* 360 Video - https://vimeo.com/215984568
* xmas tree - https://free3d.com/3d-model/low-poly-cartoon-pine-christmas-tree-47325.html

 
 
 **WIP**
 - create scenes with external non-primitive models loaded
 - custom model loaded with animations.
 - custom raycasters 