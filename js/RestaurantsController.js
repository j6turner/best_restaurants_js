bestRestaurant.controller("RestaurantsCtrl", function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, location: $scope.restaurantLocation });
    $scope.restaurantName = null;
    $scope.restaurantLocation = null;
  };
  $scope.addFeatures = function(restaurant) {
    // var feature = $scope.restaurants.indexOf(restaurant);
    $scope.restaurant.push({ feature: $scope.restaurantFeature });
    $scope.restaurantName = null;
    $scope.restaurantLocation = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };
});
