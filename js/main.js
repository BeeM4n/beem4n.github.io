function getArray(i){return i?getArray(i-1).concat(i):[]}

angular.module('notTetris', [])
    .controller('NotTetrisController', ['$scope', function($scope) {
        $scope.colorsArray = ['green', 'red', 'blue'];
        $scope.array100 = getArray(100);
        $scope.backBlocks = [];
        $scope.array100.forEach(setRandomColor);
        $scope.greenCount = 0;
        $scope.redCount = 0;
        $scope.blueCount = 0;
        function setRandomColor(item, i, arr) {
            var randomColor = $scope.colorsArray[Math.floor(Math.random()*$scope.colorsArray.length)];
            $scope.backBlocks.push({id: i, color: randomColor, active: false});
            if ($scope.backBlocks.color == 'green') {$scope.greenCount += 1;}
            if ($scope.backBlocks.color == 'blue') {$scope.blueCount += 1;}
            if ($scope.backBlocks.color == 'red') {$scope.redCount += 1;}
        }
        $scope.dump = $scope.backBlocks.count;
    }]);

