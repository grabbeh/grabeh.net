---
path: '/Moving-towards-object-oriented-JavaScript'
title: 'Moving towards object oriented JavaScript'
---

```javascript
971 additions and 3,493 deletions
```

The above statistic from Github from the repository for one of my apps [Routebop](https://github.com/grabbeh/routebop) showing the changes to the repo following a few days of editing is gratifying to me<sup id="fnref1">[1](#fn1)</sup>.

Whilst as a beginner you would normally code to improve or build a new feature, a user of the site would not notice any change to the functionality of the site following the above changes.

So on the basis that you'd normally change code to alter functionality, what actually changed?

When I initially built the site because I had a fear of cross-contamination of JS amongst different pages, and because I was (and still am in many ways) a beginner, I decided to place all the JavaScript necessary for each page in the page itself with no sharing of JS between pages at all. As functionality between pages is shared to an extent, this meant that there was a significant amount of duplication<sup id="fnref2">[2](#fn2)</sup>.

However, the extent of duplication meant that there was always a nagging feeling that switching from the JS-per-page approach to one using separate JS files would lead to a much cleaner approach and allow for an easier time in updating functionality in the future.

When I decided to refactor the code I first selected the page which I felt had the most functionality that I could potentially share across other pages. Following this, still within the same page I split up functions where I could. For example, one function collects and converts markers and waypoints into a more basic form, POSTs to the server, and then responds with a success message.

On the basis that the POSTing to the server element would be repeated, I split out this functionality and put a small wrapper around it to pass through transaction specific arguments into the function as follows:

```javascript
this.sendToServer = function(postdata, posturl, completefunction){
$.ajax({
    url: posturl,
    type: "POST",
    contentType: "application/json",
    processData: false,
    data: JSON.stringify(postdata),
    success: completefunction
    });
};
this.sendToServer(postdata, "/show", function(data){
    $('#result').html(data.message);
    });
};
```

This way, the function could be re-used passing in different arguments depending on what was necessary in the circumstances. In respect of the 'completefunction' and as per the above I use an anonymous function when the function is actually called to specify what will happen when the POST request is successful (displaying a success message, or processing the data onto a map for example).

Following this point, I then started work on a separate JavaScript file switching across functions from the page itself into the JS file. I adopted a rather timid approach to this initially, switching over a function or two, then making reference to them in the HTML file to ensure things were still working.

**Design patterns you say?**

I do have a copy of [Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/) by Addy Osmani on my bookshelf at home, however, on flipping through the book, I suspect the pattern I've used is somewhere between Constructor and the module pattern.

Essentially, this means that to use the JavaScript I create an instance of the Constructor by using the 'new' keyword and then attach that to a variable when opening a particular page. I think in part this is inspired by Google Maps which uses the new keyword when instantiating a new map or map-related item ilke a marker or infowindow.

At the same time as creating a public interface using 'new', I also included local variables within the Constructor which are only able to be accessed by public methods on the instance. An example is as follows:

```javascript
function Map(){
    var mapmarkers = [];
    this.returnMapMarkers = function(){
        return mapmarkers;
    }; 
    this.addMarkersToMap = function(array){
    // function to place marker on map & push into mapmarkersarray
    };
};

// Instantiation

var map = new Map;

map.mapmarkers;
>> undefined

map.returnMapMarkers()
>> [ array of markers ]
```

In this way, the mapmarkers private variable can only be accessed and updated using public methods (as I understand it).<sup id="fnref3">[3](#fn3)</sup>.

**Limitations on code re-use**

In the process of refactoring the code, there were times when in the current state, I couldn't re-use the code across pages. At this point, I had to create new functions which although very similar in nature to existing functions performed slightly differently.

This was definitely a lazy way of doing things, and in future, I hope to do more work in stripping down functions into their component parts to ensure a greater ability to re-use functionality.

**Separation of functionality**

In addition to the main map.js file I also created separate files to cover distinct functionality on the site. This includes image upload handling and geocoding. I think this is a fairly common practice. As part of this, I created a init() function which is then the only function called to add the functionality to the page, as it incorporates calls to all the necessary functions.

In summary, when it comes to code refactoring, I don't really know what I'm doing. However although the above may not be (i) the most efficient in terms of code re-use or (ii) implement a design pattern correctly, it is definitely a leap forward for me from the JS-per-page approach used previously.

In future I hope to use the code I've written to help me improve my usage of design patterns and write better JavaScript generally.

<div class="footnotes">

* * *

1.  Particularly on the basis that the total repo size was only 20k lines of code before the changes. [↩](#fnref1)

2.  On the other hand, one slight benefit was that altering JS on one page would only affect the functionality on that page. This form of sand-boxing helped to provide comfort that making changes to the page on the basis that it would not break another page. [↩](#fnref2)

3.  One point that does need addressing is that usually you would define static methods on the prototype of the Constructor rather than directly using 'this'. This is because by using prototype methods are automatically shared on all instances of the constructor, whereas with 'this' each method is defined afresh when a new instance is created with 'new'. I'll be updating this in the future (although in fairness multiple instances are not created on the site (for example only one 'Map' instance is created per page)). [↩](#fnref3)

