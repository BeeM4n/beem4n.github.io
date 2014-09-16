function getArray(i){return i?getArray(i-1).concat(i):[]}

angular.module('notTetris', [])
    .controller('NotTetrisController', ['$scope', function($scope) {
        $scope.colorsArray = ['green', 'red', 'blue'];
        $scope.array100 = getArray(100);
        $scope.backBlocks = [];
        $scope.array100.forEach(setRandomColor);
        function setRandomColor(item, i, arr) {
            var randomColor = $scope.colorsArray[Math.floor(Math.random()*$scope.colorsArray.length)];
            $scope.backBlocks.push({id: i, color: randomColor, active: false});
        }
        $scope.dump = $scope.backBlocks.count;
    }]);

