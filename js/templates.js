$(document).ready(function(){
    var homeHTML = Templates["templates/home.hbs"]();
    var loginHTML = Templates["templates/login.hbs"]();
    var registerHTML = Templates["templates/register.hbs"]();

    $("#outlet").html(homeHTML);

    $(".login-button").click(function(){
        $("#outlet").html(loginHTML);
    });

    $(".register-button").click(function(){
        $("#outlet").html(registerHTML);
    });

    $(".home-button").click(function(){
        $("#outlet").html(homeHTML);
    });
})