(function () {

    "use strict";

    function homeController() {
        var vm = this;
        vm.value = "This is my first app";
    }

    angular
        .module("AngularJSDemoApp")
        .controller("homeController", homeController);

} ());