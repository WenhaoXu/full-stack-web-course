(function(){

    angular.module('ita')
        .config(config);

    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];

    function config(
        $routeProvider,
        $locationProvider) {

        $locationProvider.hashPrefix('');
    }
})();
