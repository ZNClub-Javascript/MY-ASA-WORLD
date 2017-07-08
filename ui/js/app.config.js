// Angular Config : configuration for app

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
	.when("/index", {
        templateUrl : "index.html"
    })
    .when("/profile", {
        templateUrl : "profile.html"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});