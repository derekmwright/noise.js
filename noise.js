// noise.js
// 
// Created By: Derek Wright
// 
// http://derekwright.me
// http://github.com/derekmwright
//
var noise = function(parameters) {

    parameters = parameters || {};

    // Default settings for undefined parameters

    this.height = parameters.height !== undefined ? parameters.height:200;
    this.width = parameters.width !== undefined ? parameters.width:200;
    this.opacity = parameters.opacity !== undefined ? parameters.opacity:0.04;
    this.size = parameters.size !== undefined ? parameters.size:1;
    this.type = parameters.type !== undefined ? parameters.type:'monochrome';
    
    // domElement used to append to the document

    this.domElement = document.createElement('canvas');

    this.generate = function() {

        var canvas = this.domElement;
        canvas.height = this.height;
        canvas.width = this.width;
        var context = canvas.getContext('2d')
        var size_mod = this.size - 1;
        for(y=0;y<this.height;y++) {
            for(x=0;x<this.width;x++) {
                var rgba;
                if(this.type == 'monochrome') {
                    var rand = Math.floor(Math.random()* 255);
                    rgba = rand+','+rand+','+rand+','+this.opacity;
                }
                if(this.type == 'color') {
                    var rand0 = Math.floor(Math.random()* 255);
                    var rand1 = Math.floor(Math.random()* 255);
                    var rand2 = Math.floor(Math.random()* 255);
                    rgba = rand0+','+rand1+','+rand2+','+this.opacity;
                }
                context.fillStyle = "rgba("+rgba+")";
                context.fillRect(x, y, this.size, this.size);
                x += size_mod;
            }
            y += size_mod;
        }

    }

}
