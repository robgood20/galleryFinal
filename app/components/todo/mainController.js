app.controller("MainController", function($scope) {

    $scope.gallery = [];
    $scope.current = function(piece) {
        $scope.gallery.push(piece);
        $scope.piece = {};
  } 

    $scope.removePiece = function(index) {
        $scope.gallery.splice(index, 1);
}
  
    
})