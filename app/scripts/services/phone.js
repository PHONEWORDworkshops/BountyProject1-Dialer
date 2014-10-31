'use strict';

app.factory('phone', [  '$http', function ($http) {

    var self = this;

    this.currentNumber = {number:''};
    this.ref = { 
      '480': [
        {
          username: 'john_smith',
          host: 'facebook.com'
        },
        {
          username: 'john123',
          host: 'gmail.com'
        },
        {
          username: 'jsmith54321',
          host: 'yahoo.com'
        }
      ],

      '602': [
        {
          username: 'joe_shmoe',
          host: 'facebook.com'
        },
        {
          username: 'jShmoe4321',
          host: 'gmail.com'
        },
        {
          username: 'joey',
          host: 'yahoo.com'
        },
        {
          username: 'joseph',
          host: 'wordpress.com'
        }
      ]
    };

    return {

        ref: self.ref,

        currentNumber: self.currentNumber,

        addChar: function (character, callback) {
            self.currentNumber += character;
            callback(self.currentNumber.number);
        },

        clearNumber: function(){
          self.currentNumber = '';
        },

        lookup: function(number){

          var that = this;

         return $http({
            method: 'GET',
            // headers:{
            //     'Access-Control-Allow-Origin': '*'
            // },
            url: 'http://phoneword20141029-31348.onmodulus.net/number/' + number + ".json"
          });/*.success(function(data, status, headers, config){
            callback(data, status, headers, config);
          });*/
          // return that.ref[number];
        }
    };
}]);
