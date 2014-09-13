this["Templates"] = this["Templates"] || {};

this["Templates"]["templates/home.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<!-- Carousel -->\n<div class=\"destinationSearch\">\n    <img src=\"img/arrow-left.png\" class=\"arrowLeft\">\n    <img src=\"img/arrow-right.png\" class=\"arrowRight\">\n    <h1>Find a place to stay</h1>\n    <p>Rent from people in over 34,000 cities and 190 countries</p>\n    <form class=\"form-box\">\n        <input type=\"text\" name=\"destination\" placeholder=\"Where do you want to go?\">\n        <input type=\"text\" name=\"guests\" placeholder=\"How many guests?\">\n        <input class=\"btn btn-warning\" type=\"submit\" name=\"submit\" value=\"Search\">\n    </form>\n</div>\n\n<!-- Recommendations-->\n<div class=\"recommendations\">\n    <h2>Top Destinations</h2>\n    <p>Popular destinations recommended for you.</p>\n    <div class=\"place\">\n        <div class=\"col-md-6\" id=\"ny\">\n            <img src=\"img/destination-new-york.png\" class=\"img-responsive\">\n            <p>New York</p>\n        </div>\n        <div class=\"smallPic\">\n            <div class=\"col-md-3\">\n                <img src=\"img/destination-portland.png\" class=\"img-responsive\">\n                <p>Portland</p>\n            </div>\n            <div class=\"col-md-3\">\n                <img src=\"img/destination-seattle.png\" class=\"img-responsive\">\n                <p>Seattle</p>\n            </div>\n            <div class=\"col-md-3\">\n                <img src=\"img/destination-vancouver.png\" class=\"img-responsive\">\n                <p>Vancouver</p>\n            </div>\n            <div class=\"col-md-3\">\n                <img src=\"img/destination-toronto.png\" class=\"img-responsive\">\n                <p>Toronto</p>\n            </div>\n        </div><!-- Small pictures -->\n    </div><!-- Place -->\n    <div class=\"clearfix\"></div>\n</div><!-- Recommendations -->\n\n<!-- How does it work-->\n<div class=\"tutorial\">\n    <div class=\"col-md-12\">\n        <h2>How does it work?</h2>\n        <p>Rent unique, local accommodations on any budget, anywhere in the world</p>\n    </div>\n    <div class=\"row\">\n        <div class=\"tut\">\n            <div class=\"col-md-4\">\n                <a href=\"#\"><img src=\"img/icon-explore.png\"></a>\n                <h3>Explore</h3>\n                <p>Find the perfect place</p>\n            </div>\n            <div class=\"col-md-4\">\n                <a href=\"#\"><img src=\"img/icon-contact.png\"></a>\n                <h3>Contact</h3>\n                <p>Message hosts</p>\n            </div>\n            <div class=\"col-md-4\">\n                <a href=\"#\"><img src=\"img/icon-book.png\"></a>\n                <h3>Book</h3>\n                <p>View your itinerary</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- Testimonials -->\n<div class=\"testimonials\">\n    <div class=\"row\">\n        <div class=\"people\">\n            <div class=\"col-md-4\">\n                <img src=\"img/avatar-irina.png\">\n                <p>\"Spacious and art filled is right! An absolute great place to stay.\n                    The hosts were very accommodating, provided us with band-aids for\n                    out blisters from walking, and aspirin for our headache from flying.\"\n                </p>\n                <p>Irina</p>\n            </div>\n            <div class=\"col-md-4\">\n                <img src=\"img/avatar-raff.png\">\n                <p>\"What a great place. Absolutely magical. Rick and Nancy are great\n                    hosts. Take their tips on what to do and see and you'll have an\n                    unforgettable time.\"\n                </p>\n                <p>Raff</p>\n            </div>\n            <div class=\"col-md-4\">\n                <img src=\"img/avatar-costin.png\">\n                <p>\"Location, location, location! Hanneke's place could not be anymore central.\n                    Highly accessible to everything you could want to do/see in Amsterdam.\"\n                </p>\n                <p>Costin</p>\n            </div>\n        </div>\n    </div>\n</div>";
  });

this["Templates"]["templates/login.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"login\">\n    <h1>Login</h1>\n</div>\n\n<div class=\"well\">\n    <div class=\"loginDetails\">\n        <form role=\"form\">\n            <div class=\"form-group\">\n                <label for=\"input-email\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"Your email address\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"input-password\">Password</label>\n                <input type=\"email\" class=\"form-control\" id=\"input-password\" placeholder=\"Your password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n            <p><small>Don't have an account? <a href=\"/register\">Signup</a></small></p>\n        </form>\n    </div>\n</div>";
  });

this["Templates"]["templates/register.hbs"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"register\">\n    <h1>Register</h1>\n</div>\n<div class=\"well\">\n    <div class=\"loginDetails\">\n        <form role=\"form\">\n            <div class=\"form-group\">\n                <label for=\"input-name\">Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"input-name\" placeholder=\"Your name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"input-email\">Email</label>\n                <input type=\"email\" class=\"form-control\" id=\"input-email\" placeholder=\"Your email address\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"input-password\">Password</label>\n                <input type=\"email\" class=\"form-control\" id=\"input-password\" placeholder=\"Your password\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n            <p><small>Got an account already? <a href=\"/login\">Login</a></small></p>\n        </form>\n    </div>\n</div>";
  });