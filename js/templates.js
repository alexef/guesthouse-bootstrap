$(document).ready(function(){
    var homeHTML = function () {
        $("#outlet").html(Templates["templates/home.hbs"]());
    };
    var loginHTML = function () {
        $("#outlet").html(Templates["templates/login.hbs"]());
    };
    var registerHTML = function () {
        $("#outlet").html(Templates["templates/register.hbs"]());
    };


    homeHTML();

    var routes = {
        'home': homeHTML,
        'login': loginHTML,
        'register': registerHTML
    };

    var router = Router(routes);

    router.configure({
        html5history: true
    });

    router.init();

    function configureRouterURLs(router) {
        $(window).on("popstate", function(e) {
            if (e.originalEvent.state !== null) {
                router.setRoute(location.href);
            }
        });

        $(document).on("click", "a", function() {
            var href = $(this).attr("href");

            if (href.indexOf(document.domain) > -1 || href.indexOf(':') === -1) {
                history.pushState({}, '', href);
                router.setRoute(href);
                return false;
            }
        });
    }
})
