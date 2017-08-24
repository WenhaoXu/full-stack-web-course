(function () {
    angular
        .module('ita')
        .controller('ita.controller.LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = [
        '$scope',
        '$location'
    ];

    function LoginCtrl($scope, $location) {
        var vm = this;

        vm.username = "ita@oocl.com";
        vm.password = "Password1";

        vm.login = function() {
            $location.path("/trainees");
        };
    }
})();