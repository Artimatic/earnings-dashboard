'use strict';

angular
    .module('components.dash', [])
    .directive('dash', dash);

function dash() {
    var directive = {
        restrict: 'E',
        template: require('./dash.html'),
        controller: multiselectController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            options: '=',
            ngModel: '=',
            ngModelOptions: '=',
            allLabel: '@?',
            someLabel: '@?',
            noneLabel: '@?'
        }
    };

    return directive;
}
