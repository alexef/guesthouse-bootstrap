$(document).ready(function(){
    function Slideshow (pictures, element, timeInterval) {
        this.pictures = pictures;
        this.currentIndex = 0;
        this.element = element;
        this.timeInterval = timeInterval;
    }

    Slideshow.prototype = {
        constructor: Slideshow,
        startShow: function () {
            var parent = this;
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

        changeBackground: function() {
            var parent = this;
            $(parent.element).fadeTo('slow', 0.2, function(){
                $(parent.element).fadeTo('slow', 1, function(){});
                $(parent.element).css("background-image",parent.pictures[parent.currentIndex]);
            });

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
                case "right" :
                    if (parent.currentIndex === parent.pictures.length - 1) {
                        parent.currentIndex = 0;
                        break;
                    } else {
                        parent.currentIndex += 1;
                        break;
                    }
                default :
                    console.log("Sorry don't know that direction");
            }
        }
    };

    var pictures = ["url(img/Carousel1.png)", "url(img/Carousel2.png)", "url(img/Carousel3.png)"];
    var element = '.destinationSearch';
    var time = 4000;
    var x = new Slideshow(pictures, element, time);

    var homeHTML = Templates["/templates/home.hbs"]();
    var loginHTML = Templates["/templates/login.hbs"]();
    var registerHTML = Templates["/templates/register.hbs"]();

    $("#outlet").html(homeHTML);

    x.startShow();
    x.clickLeft();
    x.clickRight();

    $(".login-button").click(function(){
        $("#outlet").html(loginHTML);
    });

    $(".register-button").click(function(){
        $("#outlet").html(registerHTML);
    });

    $(".home-button").click(function(){
        $("#outlet").html(homeHTML);
    });


});

