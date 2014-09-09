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
            this.clickLeft();
            this.clickRight();
            setInterval(function() {
                direction("right");
                changeBackground();
            }, this.timeInterval);
        },

        clickLeft: function() {
            $(this.element).children('.arrowLeft').click(function(){
                direction("left");
                changeBackground();
            });
        },

        clickRight: function() {
            $(this.element).children('.arrowRight').click(function(){
                direction("right");
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

    function direction(direction){
        switch (direction) {
            case "left":
                if (currentIndex === 0) {
                    currentIndex = pictures.length - 1;
                    break;
                } else {
                    currentIndex -= 1;
                    break;
                }
            default :
                if (currentIndex === pictures.length - 1) {
                    currentIndex = 0;
                    break;
                } else {
                    currentIndex += 1;
                    break;
                }
        }
    }

    var pictures = ["url(img/Carousel1.png)", "url(img/Carousel2.png)",
        "url(img/Carousel3.png)"];
    var currentIndex = 0;
    var element = '.destinationSearch';
    var time = 3000;
    var x = new Slideshow(pictures, currentIndex, element, time);
    x.startShow();
});