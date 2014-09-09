$(document).ready(function(){
    function Slideshow (pictures, currentIndex, element, timeInterval) {
        this.pictures = pictures;
        this.currentIndex = currentIndex;
        this.element = element;
        this.timeInterval = timeInterval;
    }

    Slideshow.prototype = {
        constructor: Slideshow,
        startShow: function () {
            var parent = this;
            parent.clickLeft();
            parent.clickRight();
            setInterval(function() {
                parent.changeIndex("right");
                parent.changeBackground();
            }, this.timeInterval);
        },

        clickLeft: function() {
            var parent = this;
            $(this.element).children('.arrowLeft').click(function(){
                parent.changeIndex("left");
                parent.changeBackground();
            });
        },

        clickRight: function() {
            var parent = this;
            $(this.element).children('.arrowRight').click(function(){
                parent.changeIndex("right");
                parent.changeBackground();
            });
        },

        fade: function() {
            var parent = this;
            $(parent.element).fadeTo('slow', 0.2, function(){
                $(parent.element).fadeTo('slow', 1, function(){})
            })
        },

        changeBackground: function() {
            var parent = this;
            parent.fade();
            $(parent.element).css("background-image",parent.pictures[parent.currentIndex]);
        },

        changeIndex: function(direction) {
            var parent = this;
            switch (direction) {
                case "left":
                    if (parent.currentIndex === 0) {
                        parent.currentIndex =pictures.length - 1;
                        break;
                    } else {
                        parent.currentIndex -= 1;
                        break;
                    }
                default :
                    if (parent.currentIndex === parent.pictures.length - 1) {
                        parent.currentIndex = 0;
                        break;
                    } else {
                        parent.currentIndex += 1;
                        break;
                    }
            }
        }
    };

    var pictures = ["url(img/Carousel1.png)", "url(img/Carousel2.png)",
        "url(img/Carousel3.png)"];
    var currentIndex = 0;
    var element = '.destinationSearch';
    var time = 4000;
    var x = new Slideshow(pictures, currentIndex, element, time);
    x.startShow();
});