## Preload Images

*Preloads array of images, with option to display count.*

Accepts 3 arguments

- images - an array of image urls
- callback function, to execute when all images have loaded
- counters - should be an object containing `loaded` and `total` properties, which should be references to DOM elements which will be populated with the relevant numbers: n images loaded / total no. of images in array

Example Usage:

```js
    var loadCounters    = {
        loaded: $("#iwd-galleria-loading span:eq(1)"),
        total: $("#iwd-galleria-loading span:eq(3)")
    };

    $.preloadImages(images, function(){

		// execute once all images are loaded
  
    },loadCounters);
```
