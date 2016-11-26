
(function (){
angular.module('LunchChecker',[])

.controller('LunchCheckController', function($scope){
$scope.list_lunch ='';
$scope.fail='Please enter data first';
$scope.enjoy='Enjoy!';
$scope.much='Too much!';
function checkLunch() {
     var words = $scope.list_lunch.split(",");
    if (words == '') {
        $scope.fail;
        
    }
    if (words <=3) {
        $scope.enjoy;
        
    }
    if (words >3) {
        $scope.much;
        
    }
}

})

})();
