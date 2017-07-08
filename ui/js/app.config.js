// Angular Config : configuration for app

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
	.when("/index.html", {
        templateUrl : "index.html"
    })
    .when("/profile.html", {
        templateUrl : "profile.html"
    })
    .when("/score.html", {
        templateUrl : "score.html"
    })
    .when("/week.html", {
        templateUrl : "week.html"
    })
	.when("/birthday.html", {
        templateUrl : "birthday.html"
    });
});