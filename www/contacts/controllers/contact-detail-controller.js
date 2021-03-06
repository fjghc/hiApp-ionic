/**
 * Created by Jackey Li on 2015/8/11.
 */
(function (angular) {
    'use strict';

    /*
     * contact detail controller
     */
    angular.module('hiApp.contacts').controller('contactDetailController',
        ['$scope', '$stateParams', 'contactService', '$state', 'platformDeviceHelper',
            function ($scope, $stateParams, contactService, $state, platformDeviceHelper) {

                $scope.contact = contactService.getContactById($stateParams.contactId);

                $scope.platformDeviceHelper = platformDeviceHelper;

                /*
                 * back
                 */
                $scope.back = function () {
                    $state.go('tab.contacts');
                };
            }]);

})(angular);