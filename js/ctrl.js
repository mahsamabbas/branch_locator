

/* AngularJS App initialized*/ 
var app = angular.module('myApp', []).
controller('mapCtrl', function($scope, $http) {


    //Get Locations
    $http.get('data/locations.json').success(function(data) {
        $scope.locations = data;
    });
 

     /* All Ctrl Logic */

    /* City Filter*/
    $scope.updateCity = function(city) {
        var filterLoc = [];
        angular.forEach($scope.locations, function(item, index) {
       
            if (item.city == city) {
                filterLoc.push(item);

            } 
        });
        initialize();
    }

    /* Area Filter*/
    $scope.updateArea = function(area) {
        
        var currentAddress = '';
        $scope.currentArea;
        angular.forEach($scope.locations, function(item, index) {

            if (item.area == area) {
                currentAddress = item.address;
                 console.log(item.address);
                 console.log(currentAddress);
                 $scope.currentArea = item;
               
            } 
        });
       initialize(currentAddress, 16);
    }


/* Render Map */
var geocoder;
var map;
function initialize(add, zoom) {

  var address = add;
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(30.375321, 69.345116);
  var myOptions = {
    zoom: zoom ? zoom : 6,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  if (geocoder) {
    geocoder.geocode({
      'address': address
    }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
          map.setCenter(results[0].geometry.location);

          var infowindow = new google.maps.InfoWindow({
            content: '<b>' + address + '</b>',
            size: new google.maps.Size(150, 50)
          });

         
          var marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: map,
            title: address
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
          });

        } else {
          console.log("No results found");
        }
      } else {
        console.log("Geocode was not successful for the following reason: " + status);
      }
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);

 });


/**
 * Filters out all duplicate items from an array by checking the specified key
 * @param [key] {string} the name of the attribute of each object to compare for uniqueness
 if the key is empty, the entire object will be compared
 if the key === false then no filtering will be performed
 * @return {array}
 */
app.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});