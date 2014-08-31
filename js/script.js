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
            setInterval(function () {
                if (parent.currentIndex === parent.pictures.length - 1) {
                    $(parent.element).fadeTo('slow', 0.2, function () {
                        $(parent.element).fadeTo('slow', 1, function () {
                        });
                        $(parent.element).css("background-image", parent.pictures[0]);
                        parent.currentIndex = 0;

                    });
                } else if (parent.currentIndex < parent.pictures.length - 1) {
                    $(parent.element).fadeTo('slow', 0.2, function () {
                        $(parent.element).fadeTo('slow',1, function () {
                        });
                        $(parent.element).css("background-image", parent.pictures[parent.currentIndex + 1]);
                        parent.currentIndex += 1;
                    });

                }
            }, this.timeInterval);
        },

        clickLeft: function(){
            var parent = this;
            $('.arrowLeft').click(function(){
                if (parent.currentIndex === 0) {
                    $(parent.element).css("background-image",parent.pictures[parent.pictures.length - 1]);
                    parent.currentIndex = parent.pictures.length - 1;
                } else if (parent.currentIndex > 0) {
                    $(parent.element).css("background-image",parent.pictures[parent.currentIndex - 1]);
                    parent.currentIndex -= 1;
                }
            });
        },

        clickRight: function(){
            var parent = this;
            $('.arrowRight').click(function(){
                if (parent.currentIndex === parent.pictures.length - 1) {
                    $(parent.element).css("background-image", parent.pictures[0]);
                    parent.currentIndex = 0;
                } else if (parent.currentIndex < parent.pictures.length - 1) {
                    $(parent.element).css("background-image", parent.pictures[parent.currentIndex + 1]);
                    parent.currentIndex += 1;
                }
            });
        }
    };

    var pictureLinks = ["url(img/Carousel1.png)", "url(img/Carousel2.png)",
        "url(img/Carousel3.png)"];
    var currentIndex = 0;
    var element = '.destinationSearch';
    var time = 4000;
    var x = new Slideshow(pictureLinks, currentIndex, element, time);
    x.startShow();
    x.clickLeft();
    x.clickRight();

});