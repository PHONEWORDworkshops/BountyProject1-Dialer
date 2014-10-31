'use strict';

app.controller('MainCtrl', ['$scope', 'phone', function ($scope, phone) {
    
    $scope.currentNumber = phone.currentNumber;
    $scope.addChar = phone.addChar;
    $scope.matches = [];
    
    $scope.cheat = function(ret){
    	$scope.currentNumber.number = ret;
    };

    $scope.call = function(){

    	var pro = phone.lookup($scope.currentNumber.number);

		pro.then(function(response){
			console.log(response);
		});
    	
    };

    $scope.clear = function(){
    	$scope.matches = [];
    	$scope.currentNumber.number = '';
    	phone.clearNumber();
    };
}]);

app.directive( "number", [ "phone", function(phone){
	return{
		restrict: 'A',
		replace: false,
		link: function(scope, element, attr){

			scope.$watch('currentNumber.number', function(newVal, oldVal){
				if(newVal == oldVal){
					return;
				}
				scope.call();
			}, true);

		}
	}
}]);
