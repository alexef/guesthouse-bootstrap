$(document).ready(function(){
    function Slideshow (pictures, currentIndex, element, timeInterval) {
        this.pictures = pictures;
        this.currentIndex = currentIndex;
        this.element = element;
        this.timeInterval = timeInterval;
    }

    Slideshow.prototype = {
        constructor: Slideshow,
//        clickRight: function(){
//            $('this.arrowRight').click(function(){
//                if (currentIndex === pictureLinks.length - 1) {
//                    $('this.destinationSearch').css("background-image",pictureLinks[0]);
//                    currentIndex = 0;
//                } else if (currentIndex < pictureLinks.length - 1) {
//                    $('this.destinationSearch').css("background-image",pictureLinks[currentIndex + 1]);
//                    currentIndex += 1;
//                }
//            });
//        },
//        clickLeft: function(){
//            $('this.left').click(function(){
//                if (currentIndex === 0) {
//                    $('this.destinationSearch').css("background-image",pictureLinks[pictureLinks.length - 1]);
//                    currentIndex = pictureLinks.length - 1;
//                } else if (currentIndex > 0) {
//                    $('this.destinationSearch').css("background-image",pictureLinks[currentIndex - 1]);
//                    currentIndex -= 1;
//                }
//            });
//        },
        startShow: function(){
            console.log("hello i just got called");
            setInterval(function(){
                if (currentIndex === pictures.length - 1) {
                    $('this.element').css("background-image",pictures[0]);
                    currentIndex = 0;
                } else if (currentIndex < pictures.length - 1) {
                    $('this.element').css("background-image",pictures[currentIndex + 1]);
                    currentIndex += 1;
                }
            },this.timeInterval);
        }
    }

    var pictureLinks = ["url(../img/Carousel1.png)","url(../img/Carousel2.png)",
        "url(../img/Carousel3.png)"];
    var currentIndex = 0;
    var time = 1000;
    var x = Slideshow(pictureLinks,currentIndex,$('.destinationSearch'),time);
    x.startShow();

});