/*!
 * Preload Images v1.0
 * Inigo Pascall 2016
 */

/*
 Preloads array of images, with option to display count.

 Example Usage:

        var loadCounters    = {
            loaded: $("#iwd-galleria-loading span:eq(1)"),
            total: $("#iwd-galleria-loading span:eq(3)")
        };

        $.preloadImages(images, function(){

			// execute once all images are loaded
      
        },loadCounters);

*/

(function ($) {
    $.extend({
        preloadImages: function (images, callback, counters) {
		    var total = images.length;
		    if(total === 0) {
		        callback();
		    }
		    var loaded = 0;

		    if(counters){
		        counters.loaded.text(loaded);      
		        counters.total.text(total);
		    }

		    $(images).each(function() {
		        $('<img>').attr('src', this).on('load',function() {
		            loaded++;
		            if(counters){
		                counters.loaded.text(loaded);      
		            }            
		            if (loaded === total) {
		                callback();
		            }
		        });
		    });
        }
    });
})(jQuery);    