var app = angular.module('project', []);

app.controller('mainCtrl', ['$scope', '$http', function($scope, $http){ 


    $http.get('data.json').success(function(data) {
    $scope.data = data;

  });

  $scope.changeClass=function(name) {
      item1.style.display="none";
      item2.style.display="none";
      item3.style.display="none";
      item4.style.display="none";
      item5.style.display="none";
      var x = document.getElementById(name);
      if (x.style.display === "none") {
    
     x.style.display = "block";
    } else {
     x.style.display = "none";
    }
  }



}]);

