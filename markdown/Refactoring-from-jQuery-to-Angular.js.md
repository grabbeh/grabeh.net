
I recently transferred a site recently written predominantly using jQuery to Angular. The site is [Geophoto](http://geophoto.grabeh.net) and simply allows a user to be shown photos of a particular place. The user can click on a map, provide a location or let the browser geolocate them.

I am the first to admit that the jQuery I had written previously was a bit of a jumble to say the least, having no real structure. Consequently it would be untruthful to say I was translating finely-tuned jQuery code to Angular and that jQuery was some kind of evil bogeyman to be expunged at all costs! If anything I am the bogeyman for being allowed to write jQuery in such an abominable manner!

jQuery can to an extent be moulded into whatever framework you want (to an extent!) but for a relative beginner the enforced compartmentalisation imposed by Angular has definitely helped me to produce code which I hope is cleaner and more straightforward to extend in the future.

There are a few issues that I faced in transferring but overall it was a relatively smooth experience. Although this is attributable in part to my experience in building another site with related functionality.

**Google maps**

To recreate Google maps in Angular I simply wrapped all the necessary functionality in a Google maps-specific directive. However to limit the amount of functionality that interacted with the map, I had the directive $.broadcast out the necessary information to the parent controller.

That way the controller could simply take that data and use it, without getting too involved with the map directive:

        $.$on('coords.change', function(e, l){     
            flickr.search({ 
                lat: l.lat, 
                lon: l.lon, 
                tags: $.tag, 
                licenses: returnSelectedBoxesFilter($scope.licenses) })
                .success(function(data){
                    $.arrayOfPhotos = data;
                })
                .error(function(err){
                    console.log(err);
                })
            });

**multiple select boxes**

I use a range of select boxes in the app to allow the user to specify a range of licences applicable to their search. With jQuery I iterated over the boxes and extracted the selected ones to go to the server (Flickr's API takes an array of numbers corresponding to the different licences). The select boxes were then manually referenced in the HTML.

In Angular the process is similar however, I extracted out the data for each licence (name, type) into the related controller, and then used an ng-repeat in the HTML itself. This results in cleaner HTML plus by specifying a model for each box, Angular automatically keeps track of which boxes are updated.

Then to extract the licences, a custom $filter is used in the controller to then return the above-mentioned array. Overall the presence of filters encourages you to switch data manipulation away from the controller and thus helping you reduce the amount of code in your controller (this is a good thing because often controllers can be a dumping ground for everything that's not in your HTML views).

**geocoder services**

When the user inputs a physical location, the app geocodes this and returns coordinates so a marker can be placed on the map. Conversely to provide a physical address when the user clicks the map, the coordinates are reverse-geocoded.

In both jQuery and Angular I use Google's geocoder service. With the latter however this has been extracted into a separate service which can then be injected into the controller.

As part of creating the service, I became more acquainted with promises and the $q functionality that Angular uses for promises. Although I'd used $http before, as it returns a promise automatically, I hadn't used $q before (although you can still use $q as part of $http for additional validation).

Using promises in services basically allows you to create a 'thennable' methods. When the method is called it will have a 'then' method to which you can provide two functions as arguments. The first what will happen in the event of a successful resolution (i.e. exposing the returned data), and the second in the event of a failed call (showing a suitable error message for example).

    .factory('geoCoder', ['$q', function($q){
             geocoder = new google.maps.Geocoder();
              geocodeAddress: function(address){
                     var deferred = $q.defer();
                     geocoder.geocode({
                        address: address
                     }, function(results, status){
                        if (status == google.maps.GeocoderStatus.OK){
                            return deferred.resolve(results);
                        }
                        return deferred.reject();
                     })
                     return deferred.promise;
                }
            }
            return geoCoder;
        }])

**geolocation via $window**

Rather than relying on window for HTML5 geolocation, I found you can use $window for this functionality which provides a suitable namespace rather than a global definition.

**mg-paginator**

Due to Flickr's terms of service, you can only display up to 30 photos per page. This meant that I had to create code to paginate the array of photo objects returned from the server.

Although I got this done in jQuery, the code in Angular is much cleaner. Again, this may well be because from my study of Angular I have learnt cleaner ways of doing things. In jQuery for example in order to remove a 'Previous' button if at the start of an array, I tested the length of the array then removed the text of the button.

With Angular, I now use a function directly in the HTML linked to the ng-hide directive.

Additionally with Angular I was able to move the paginator specific code into a separate directive which makes the underlying HTML a little cleaner. I am still working out how to make the directive more reusable but having an isolated scope on the directive is certainly a move in the right direction (isolated scope means that your directive is not reliant on any parent scopes and only specific data/functions can be passed in via attributes on your directive (at least that is my understanding!)).

**ng-pluralise**

Previously I worked directly with the DOM manipulating it dependent on the number of items in an array via conditional statements.

Ng-pluralise in its simplest form is a directive which allows you to map statements for the DOM to the length of an array, in the HTML code itself. This meant I could do away with direct manipulation and makes for a much cleaner way of doing things.

**ng-repeat and automatic updating**

The app shows a list of places where users have searched for photos. Previously when each location was provided it would be added to the DOM manually.

With Angular I can push the location into a controller-based array and then use ng-repeat in the HTML itself, spitting out an element for each location. Because of the link to the controller the ng-repeat will update automatically when new locations are pushed into the array.

    geoCoder.reverseGeocode(new google.maps.LatLng(l.lat, l.lon)).then(function(data){
          $.locations.push(data[0].formatted_address);
    })

**Conclusion**

The code can be viewed in full [here on Github](https://github.com/grabbeh/geophoto). Whilst the overall length may not have changed, the structure has improved dramatically in my view.

