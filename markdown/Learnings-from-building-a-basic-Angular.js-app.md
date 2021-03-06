---
path: '/Learnings-from-building-a-basic-Angular.js-app'
title: 'Learnings from building a basic Angular.js app'
---

I have recently been tinkering with Angular.js to build a basic application called Instok. Although I haven't really scratched the surface when it comes to Angular.js, I definitely learned a good amount about the framework and thought I'd share that in a post:

**Authentication**

Having worked with pure-server side authentication (in the sense that all authentication happened on the server, and if a request was successful there would be a redirect with a full page re-render) it was definitely a hurdle for me to manage authentication in Angular.

The main issue was that instead of there being a full page re-render on authentication, the server would notify the client that authentication was successful.

However, initially I tried to stick as closely as possible to the existing server-side method as possible. This involved setting the user as a local variable (using app.locals in Express) which would be passed when the initial index.html template was rendered on the client side.

However, this technique proved to be a little problematic for me on the basis that when a user logged out on the client-side, the change did not immediately follow through in the entirety of the app.

Specifically, conditional views using ng-show would continue to display as if the user was still logged in. I think this may have been solved with a full page re-render but on the basis that I was using ng-view to display the bulk of the app (with the ng-show elements sitting outside the ng-view), I didn't necessarily want to do this.

I think I then read about an alternative which would be to create a service to fetch the authenticated user from the server on a successful authentication. As a result, when the user logs in, on a successful request, the server responds with a 200 status, and the client then subsequently requests the logged in user's details.

On a successful request, the user is then attached to the rootScope, and therefore accessible through the Angular app.

As a side note, I tried to simply send the authed user back with the login request, but for reasons I couldn't fathom this didn't work as desired. I also realise I should potentially use http interceptors to deal with the incoming requests, rather than waiting to deal with them in a service however at this stage I think I'm just pleased I've got authentication to work ok!

**Restricting routes**

Initially in each controller for a particular route that I wanted to restrict access to I would make a call to the server to check if there was an authenticated user on the server-side. If there was no authed user I would redirect to a login page.

I then realised I could make use of the resolve feature on the $routeProvider to check whether the user was present and if not, redirect. In relation to the latter point, this was achieved using the following:

```javascript
$rootScope.$on('$routeChangeError', function(){
    $location.path('/login')
});
```

This works quite nicely however it's not immediately clear to me why this is necessary on the basis that the user should be attached to the $rootScope on the client-side and so I should be able to monitor whether or not there is an authenticated user without going to the server. One for a future tinkering perhaps.

**Caching**

One problem that stumped me for some time was that in Internet Explorer 10, fetching data from the server appeared not to work as old data kept on appearing, even if a client-side input had resulted in the data changing.

Being a bit of a novice, it took a while to realise that the client was displaying cached data. After some digging, I found out that adding the following properties to the response headers would instruct the client-side not to cache results, meaning that fresh data would be displayed in each instance.

    res.set('Cache-Control', 'no-cache, no-store');

**Logging**

Not Angular.js related, however, building the app gave me an appreciation for the art of logging. When attempting to login I was periodically faced with 502 Bad Gateway errors from Nginx. I think the periodic error as opposed to the consistent error is possibly the most frustrating especially for a beginner because it makes it that much harder to track down.

Although I began to log errors arising from the Express app, and also with Nginx, this got me no closer to a solution. Eventually, I realised that because I was using Forever to keep the Express app up, there might be a solution within Forever's logs.

Sure enough, it became clear that the issue was with the MongoDB instance I was using throwing an error. Having identified the source of the problem I switched to a new instance and have had no problems since that point.

**Passport.js**

Being a novice and also not wishing to reinvent the wheel, I initially used passport.js for authentication within Express. This worked like a charm however as in perhaps a lot of cases, it seemed ever so slightly magical. I appreciate that I could have dug into the underlying code but as I'm a beginner this was a little daunting.

Using Passport.js was great, however where I wanted to deviate from the functionality made available by passport things were a little tricky. I stumbled across an example of authentication on [Runnable](http://runnable.com/UTlPPF-f2W1TAAEY/login-auth-using-sessions-in-express-for-node-js-and-authentication). The 'authenticate' function in particular made a great deal more sense to me than the passport LocalStrategy example shown [here](http://passportjs.org/guide/username-password/).

Specifically, the usage of 'fn' as a callback to pass in either the error or the user seemed much clearer than the abstraction used by passport (It wasn't immediately clear to me where the 'done' callback was actually called - although I think this may be done internally with the user automatically added to 'req.user'). This is absolutely a reflection on my status as a beginner rather than passport however.

Consequently, on the basis that my needs were relatively simple, I replaced passport with the authenticate function. I think all in all this has been working well for me thus far although I appreciate that passport can really come into its own when multiple authentication routes As a bonus, I have also been using the pattern of returning a function with either the error, or the result as a means of building up more complex functions by incorporating existing functions using this pattern.

```javascript
// Function
function authenticate(name, pass, fn) {
    User.find({name: name}, function(err, user){
        if (err) { return fn(err);}
        else  { return fn(null, user); }
    })
}

// Usage
authenticate("username", "password", function(err, user){
    if (user){
            req.session.regenerate(function(){
            req.session.user = user;
            res.status(200).send();
            })
        }
        else {
        res.status(401).send({message: "Error"})
        }
}
```

**Conclusion**

All in all, the development process was fairly smooth and I very much enjoy using Angular and being forced to compartmentalise functionality in separate controllers and services. As outlined above, there were some moments which resulted in long delays (and scouring of Stackoverflow of course) but I am pleased with the end result.

