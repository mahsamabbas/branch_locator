

/* AngularJS App initialized*/ 
var app = angular.module('myApp', []).
controller('mapCtrl', function($scope) {

    /* All Ctrl Logic */
    

    /*  locations */
     $scope.locations = [
        {city:'Abbottabad', address: 'Shop No 2, Kamran Plaza Opposite Daewoo Terminal, Mandian, Abbottabad, Pakistan', Country:'Pakistan', area:' Mandian', general:'+92 992 385194', home:'+92 992 385195', TT:'', DD:'', Fax:'', uan:''},
        {city:'Daska', address: 'Sambrial Road,Opposite Veterinary Hospital, Daska, Pakistan', Country:'Pakistan', area:'Sambrial Road', general:'+92 52 6611004', home:'+92 52 6611005', TT:'+92 52 6611002', DD:'+92 52 6611003', Fax:'+92 52 6611006', uan:''},
        {city:'Dina', address: 'Jinnah Market, G.T Road, Dina, Pakistan', Country:'Pakistan', area:'Jinnah Market', general:'+92 544 634481-3', home:'', TT:'', DD:'', Fax:'+92 544 634484', uan:''},   
        {city:'Faisalabad', address: '33-B, Malik Plaza,  D-Ground, Faisalabad, Pakistan', Country:'Pakistan', area:'Malik Plaza', general:'+92 41 8542202-3', home:'', TT:'', DD:'', Fax:'+92 41 8542204', uan:''},    
        {city:'Faisalabad', address: 'Katchery Bazar, Faisalabad, Pakistan', Country:'Pakistan', area:'Katchery Bazar', general:'+92 41 2603455, +92 41 2603455', home:'+92 41 2644927, +92 41 2644927', TT:'+92 41 2610728', DD:'+92 41 2621759', Fax:'+92 41 2623855', uan:'+92 41 111-900-200'},
        {city:'Gujar Khan', address: 'D - 3 - 217/218, Abdul Hameed Plaza, G.T Road, Gujar Khan, Pakistan', Country:'Pakistan', area:'Abdul Hameed Plaza', general:'+92 51 3511805-07', home:'', TT:'', DD:'', Fax:'+92 51 3511808', uan:''},
        {city:'Gujranwala', address: 'Bank Square, Gujranwala, Pakistan', Country:'Pakistan', area:'Bank Square', general:'+92 55 4239818', home:'+92 55 4210801', TT:'+92 55 4226813-14', DD:'+92 55 4213362', Fax:'+92 55 4226135', uan:'+92 55 111-900-200'},
        {city:'Gujrat', address: 'East Circular Road, Ashraf Plaza, Timbal Chowk, Gujrat, Pakistan', Country:'Pakistan', area:'Timbal Chowk', general:'', home:'+92 53 3530422, +92 53 3530522', TT:'+92 53 3510487', DD:'+92 53 3510487', Fax:'+92 53 3511703', uan:'+92 53 111-900-200'},
        {city:'Haripur', address: 'Shop No. 2, G.T Road, Haripur, Pakistan', Country:'Pakistan', area:'', general:'+92 995 616302', home:'+92 995 616303', TT:'', DD:'', Fax:'', uan:''},
        {city:'Islamabad', address: '51-Chaudhary Plaza, Blue Area , Islamabad, Pakistan', Country:'Pakistan', area:'Blue Area', general:'+92 51 2274919, +92 51 2274590', home:'+92 51 2274590, +92 51 2274919', TT:'+92 51 2274591, +92 51 2824851', DD:'+92 51 2274590, +92 51 2274919', Fax:'+92 51 2828382', uan:'+92 51 111-900-200'},
        {city:'Jhelum', address: '2 Fazal Plaza, Civil Lines, Jhelum, Pakistan', Country:'Pakistan', area:'Civil Lines', general:'+92 544 720687,+92 544 720818', home:'', TT:'+92 544 720697', DD:'+92 544 720646', Fax:'+92 544 720806', uan:'+92 544 111-900-200'},
        {city:'Karachi', address: 'I.I. Chundrigar Road, Karachi, Pakistan', Country:'Pakistan', area:'Chundrigar Road', general:'+92 21 32214507', home:'+92 21 32214506', TT:'+92 21 32272170', DD:'+92 21 32275089', Fax:'+92 21 32214508', uan:'+92 21 111-900-200'},
        {city:'Karachi', address: 'Shop No: 09, Ground Floor - Amber Castle, 21-A, P.E.C.H.S, Block 6, Opposite Lal Kothi,  Sharah-e-Faisal, Karachi, Pakistan', Country:'Pakistan', area:'Sharah-e-Faisal', general:'+92 21 34322687', home:'+92 21 34322686', TT:'+92 21 34322682-83', DD:'+92 21 34322681', Fax:'+92 21 34322685', uan:''},
        {city:'Kharian', address: 'Shop - 1 & 2, Dawood Rasha Plaza, G.T Road, Kharian, Pakistan', Country:'Pakistan', area:'Dawood Rasha Plaza', general:'+92 53 7601223,4 & 6', home:'+92 53 7601222', TT:'', DD:'', Fax:'+92 53 7601225', uan:''},
        {city:'Lahore', address: 'Allama Iqbal International Airport, Lahore, Pakistan', Country:'Pakistan', area:'Allama Iqbal International Airport', general:'+92 42 36611441-4', home:'', TT:'', DD:'', Fax:'+92 42 36611445', uan:''},
        {city:'Lahore', address: '103 - R Block, DHA - Phase II, Near Lalak Jan Chowk, Lahore, Pakistan', Country:'Pakistan', area:'Defence', general:'+92 42 35745288', home:'+92 42 35745289', TT:'+92 42 35745284-85', DD:'+92 42 35745284-85', Fax:'+92 42 35745290 ', uan:''},
        {city:'Lahore', address: 'Shop - 881A, Block D, Faisal Town, Lahore, Pakistan', Country:'Pakistan', area:'Faisal Town', general:'+92 42 35221701', home:'+92 42 35221694', TT:'+92 42 35221702', DD:'+92 42 35221702', Fax:'+92 42 35221697', uan:''},
        {city:'Lahore', address: 'G-07 & G-10, Al Latif Center, Main Boulevard, Gulberg III, Lahore, Pakistan', Country:'Pakistan', area:'Gulberg', general:'+92 42 35872025', home:'+92 42 35872896, +92 42 35873025', TT:'+92 42 35872891-3', DD:'+92 42 35872891-3', Fax:'+92 42 35872890', uan:'+92 42 111-900-200'},
        {city:'Lahore', address: 'Shop No. 01 & 02, Mecca Tower, Outside Bhatti Gate, Opposite Gamay Shah Karbala, Lahore, Pakistan', Country:'Pakistan', area:'Bhatti Gate', general:'+92 42 37361576-77, 37112376-8', home:'+92 42  37361577, 37112377 ', TT:'', DD:'', Fax:'', uan:''},
        {city:'Lahore', address: '280-Ground Floor, Panorama Centre, Lahore, Pakistan', Country:'Pakistan', area:'The Mall', general:'+92 42 36301960', home:'+92 42 36375106-7', TT:'', DD:'+92 42 36361311', Fax:'+92 42 36375109', uan:''},
        {city:'Mandi Bahauddin', address: 'Sadar Chowk,Main Bazar , Mandi Bahauddin, Pakistan', Country:'Pakistan', area:'Sadar Chowk', general:'+92 546 501217, +92 546 501218', home:'', TT:'', DD:'', Fax:'+92 546 501486', uan:'+92 546 111-900-200'},
        {city:'Mansehra', address: 'Shop No. 1, Sattar Kahan Market, Abbottabad Road , Mansehra, Pakistan', Country:'Pakistan', area:'Abbottabad Road', general:'+92 997 301571', home:'+92 997 301572', TT:'', DD:'', Fax:'+92 997 301573', uan:''},
        {city:'Mirpur', address: '40 - Muhammadi Plaza, Allama Iqbal Road, Mirpur, Pakistan', Country:'Pakistan', area:'Allama Iqbal Road', general:'+92 5827 443766', home:'+92 5827 443737, +92 5827 443748', TT:'+92 5827 443766, +92 5827 443750', DD:'+92 5827 443766, +92 5827 443750', Fax:'+92-5827-443778', uan:'+92 5827 111-900-200'},
        {city:'Multan', address: '88-Mall Plaza, Shangrila Chowk, Multan Cantt, Pakistan', Country:'Pakistan', area:'Shangrila Chowk', general:'+92-61 4548159,+92 61 4576239', home:'+92 61 4548160, +92 61 4548159', TT:'+92 61 4545722', DD:'+92 61 4546118', Fax:'+92 61 4543819', uan:'+92 61 111-900-200'},
        {city:'Muzaffarabad', address: 'Shop No -4 Qasim Plaza,Bank Road, Tanga Stand, Muzaffarabad, Pakistan', Country:'Pakistan', area:'Bank Road', general:'+92 5822 214028', home:'+92 5822 206690', TT:'', DD:'', Fax:'+92 5822 214031', uan:''},
        {city:'Peshawar', address: 'Abdul Shakoor Building, 1st Floor, Chowk Yadgar, Peshawar, Pakistan', Country:'Pakistan', area:'Chowk Yadgar', general:'+92 91 2567625-6', home:'+92 91 2567626', TT:'+92 91 2567624, +92 91 2562475', DD:'+92 91 2567625,+92 91 2562476', Fax:'+92 91 2592422', uan:'+92 91 111-900-200'},
        {city:'Phalia', address: 'SKhewat No. 215, Opposite Masjid Gulzar e Madina, Hella Road, Mohala Meeman, Phalia, Pakistan', Country:'Pakistan', area:'Bank Road', general:'+92 546 587535-6', home:'+92 546 587537', TT:'', DD:'', Fax:'', uan:''},
        {city:'Rawalpindi', address: 'Shop No. 33-B, The Mall Plaza, Mall Road, Rawalpindi, Pakistan', Country:'Pakistan', area:'Mall Road', general:'+92 51 5566238-240', home:'+92 51 5566237', TT:'', DD:'', Fax:'', uan:''},
        {city:'Sahiwal', address: 'Shop No: 271/B-II, Opposite Noor Masjid, M.A Jinnah Road (High Street), Sahiwal, Pakistan', Country:'Pakistan', area:'M.A Jinnah Road', general:'+92 40 4460658, +92 40 4460628,+92 40 4460683', home:'+92 40 4460641', TT:'', DD:'', Fax:'', uan:''},
        {city:'Swat', address: 'G.T Road (near Nishat Chowk) Swat Market, Mingora, Swat, Pakistan', Country:'Pakistan', area:'Mingora', general:'+92 946-724092-93', home:'', TT:'', DD:'', Fax:'+92 946-724095', uan:'111-900-200'},
        {city:'Sialkot', address: 'Bano Bazar, Sialkot, Pakistan', Country:'Pakistan', area:'Bano Bazar', general:'+92 52 4598194', home:'+92 52 4596602', TT:'+92 52 4581561-2', DD:'+92 52 4581561-2', Fax:'+92 52 4597369', uan:'+92 52 111-900-200'},

    ];

    initialize();

    /* City Filter*/
    $scope.updateCity = function(city) {
        var filterLoc = [];
        angular.forEach($scope.locations, function(item, index) {
       
            if (item.city == city) {
                filterLoc.push(item);
            } 
        });
        initialize(filterLoc)
    }

    /* Area Filter*/
    $scope.updateArea = function(area) {
      
        var filterLoc = [];
        $scope.currentArea;
        angular.forEach($scope.locations, function(item, index) {

            if (item.area == area) {
                filterLoc.push(item);
                $scope.currentArea = filterLoc[0];
               
            } 
        });
       initialize(filterLoc)
    }

   

/* Render Map */
var geocoder;
var map;
var bounds = new google.maps.LatLngBounds();

function initialize(locations) {
    map = new google.maps.Map(
    document.getElementById("map"), {
        center: new google.maps.LatLng(30.375321, 69.345116),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    geocoder = new google.maps.Geocoder();

    if(locations){
        for (i = 0; i < locations.length; i++) {

            geocodeAddress(locations[i]);
        }
    }    
}


function geocodeAddress(locations) {
   
    var title = locations.city;
    var address = locations.address;
    var url = locations.city;
    
    geocoder.geocode({
        'address': locations.address
    },

    function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var marker = new google.maps.Marker({
            
                map: map,
                position: results[0].geometry.location,
                title: title,
                animation: google.maps.Animation.DROP,
                address: address,
                url: url
            })
            infoWindow(marker, map, title, address, url);
            bounds.extend(marker.getPosition());
            map.fitBounds(bounds);
        }  else {
            console.log("geocode of " + address + " failed:" + status);
        }
    });
}

function infoWindow(marker, map, title, address, url) {
    google.maps.event.addListener(marker, 'click', function () {
        var html = "<div><h3>" + title + "</h3><p>" + address + "</p></div>";
        iw = new google.maps.InfoWindow({
            content: html,
            maxWidth: 350
        });
        iw.open(map, marker);
    });
}


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