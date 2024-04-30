angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://ebs1-env.eba-wfhdcuwi.us-east-1.elasticbeanstalk.com/';

    return service;
}]);
