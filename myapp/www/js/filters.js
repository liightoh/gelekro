'use strict'

angular.module('resto', [])

function RestoCtrl($scope){
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
}

