$(document).ready(function(){
    function Slideshow (pictures, currentIndex, element, timeInterval) {
        this.pictures = pictures;
        this.currentIndex = currentIndex;
        this.element = element;
        this.timeInterval = timeInterval;
    }

    Slideshow.prototype = {
        startShow: function () {
            console.log("hello i just got called");
            setInterval(function () {
                if (this.currentIndex === this.pictures.length - 1) {
                    $(this.element).css("background-image", this.pictures[0]);
                    this.currentIndex = 0;
                } else if (this.currentIndex < this.pictures.length - 1) {
                    $(this.element).css("background-image", this.pictures[this.currentIndex + 1]);
                    this.currentIndex += 1;
                }
            }, this.timeInterval);
        }
    };

    var pictureLinks = ["url(img/Carousel1.png)", "url(img/Carousel2.png)",
        "url(img/Carousel3.png)"];
    var currentIndex = 0;
    var element = '.destinationSearch';
    var time = 4000;
    var x = new Slideshow(pictureLinks, currentIndex, element, time);
    x.startShow();

});