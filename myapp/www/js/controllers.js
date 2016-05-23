angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})


    .controller('RandomCtrl', function($scope) {

        getRandomImage(random_images_array, '../img/');
        
    })

        /*
    .controller('RestoCtrl', function($scope){
        'use strict'

        angular.module('resto', [])

        $scope.resto = [
            {'name': 'ChickenSpot', 'Type': 'Halal'},
            {'name': 'Planet Sushi', 'Type': 'Asiatique'},
            {'name': 'MacDonald', 'Type': 'Fast Food'},
            {'name': 'Dominos Pizza', 'Type': 'Pizzeria'},
            {'name': 'Subway', 'Type': 'Fast Food'},
            {'name': 'KFC', 'Type': 'Copieux'},
            {'name': 'Flunch', 'Type': 'Restaurant'},
            {'name': 'Chipotle', 'Type': 'Mexicain'},
            {'name': 'Mongoo', 'Type': 'Vegetarien'}];

        $scope.TypeIncludes = [];

        $scope.includeType = function (type) {
            var i = $.inArray(type, $scope.TypeIncludes);
            if (i > -1) {
                $scope.TypeIncludes.splice(i, 1);
            } else {
                $scope.TypeIncludes.push(type);
            }
        }

        $scope.TypeFilter = function (resto) {
            if ($scope.TypeIncludes.length > 0) {
                if ($.inArray(resto.Type, $scope.TypeIncludes) < 0)
                    return;
            }

            return resto;
        }
    })
 */

    .controller('ChoisirCtrl', function($scope) {})



.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
