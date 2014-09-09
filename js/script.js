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
            setInterval(function() {
                if (currentIndex === pictures.length - 1) {
                    currentIndex = 0;
                } else {
                    currentIndex += 1;
                }
                changeBackground();
            }, this.timeInterval);
        },

        clickLeft: function() {
            $(element).children('.arrowLeft').click(function(){
                if (currentIndex === 0) {
                    currentIndex = pictures.length - 1;
                } else {
                    currentIndex -= 1;
                }
                changeBackground();
            });
        },

        clickRight: function(){
            $(element).children('.arrowRight').click(function(){
                if (currentIndex === pictures.length - 1) {
                    currentIndex = 0;
                } else {
                    currentIndex += 1;
                }
                changeBackground();
            });
        }
    };

    function fader(element) {
        $(element).fadeTo('slow', 0.2, function(){
            $(element).fadeTo('slow', 1, function(){})
        })
    }

    function changeBackground() {
        fader(element);
        $(element).css("background-image",pictures[currentIndex]);
    }

    var pictures = ["url(img/Carousel1.png)", "url(img/Carousel2.png)",
        "url(img/Carousel3.png)"];
    var currentIndex = 0;
    var element = '.destinationSearch';
    var time = 3000;
    var x = new Slideshow(pictures, currentIndex, element, time);
    x.startShow();
    x.clickLeft();
    x.clickRight();

});