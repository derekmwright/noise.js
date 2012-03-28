// noise.js
// 
// Created By: Derek Wright
// 
// http://derekwright.me
// http://github.com/derekmwright
//
var noise = function(height, width, opacity, type, size) {
    this.height = (height !== undefined) ? height:200;
    this.width = (width !== undefined) ? width:200;
    this.opacity = (opacity !== undefined) ? opacity:0.04;
    this.size = (size !== undefined) ? size:1;
    this.domElement = document.createElement('canvas');
    this.type = (type !== undefined) ? type:'monochrome';
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