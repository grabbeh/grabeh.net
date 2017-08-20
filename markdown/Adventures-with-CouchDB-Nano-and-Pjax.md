
Note - the blog on routebop.grabeh.net used to use nanoblog however this blog uses good old fashioned html.

It seemed somehow fitting to write the first blog on here about the process of creating the blog itself, so whilst I hope to write on a broader range of topics on the above in future, what follows below is some comment on the tools used to build this blog.

CouchDB and Nano

Whilst the main site utilises MongoDB for persistence, when I was originally looking at options for persistence, [CouchDB](http://couchdb.apache.org/) was of interest, so although I ending up opting for MongoDB, CouchDB always stuck with me. So as it was, when I decided it would be a good idea to get some thoughts down, I thought it would be a nice little project to put together a blog using CouchDB for persistence.

When looking at how to interface with CouchDB I considered a few options. Initially, I thought it would be nice to make HTTP requests directly to a CouchDB instance. I looked at [browser-request](https://github.com/iriscouch/browser-request), a library from the guys at [IrisCouch](http://www.iriscouch.com) (who coincidentally are the provider of the CouchDB instance used by this blog (thanks!)).

Having played around with the browser variant, I ended up realising that it may be less cluttered to separate out concerns and leave the client-side purely for rendering the finished product.

Having decided to use Node together with CouchDB, it wasn't long before I stumbled on [Nano](http://github.com/dscape/nano) by Nuno Job. Nano is a basic wrapper which simplifies greatly interactions with your CouchDB instance. There were a few points with CouchDB and Nano that were and in some cases still are stumbling for me as per the below.

Creating a database

Nano exposes a .use method to specify which database you are going to use. This assumes it has previously been created, so the first step would be to create the database. However, the issue for me is that once created, you don’t want to then subsequently create a further database on each occasion. I need to therefore figure out to perhaps only create a database if it doesn’t already exist.

CouchDB views

Coming from MongoDB/Mongoose, it took me a while to realise that CouchDB uses the concept of views to process and display data from the database. A view can be as simple as the below:

    function(doc) {
      emit(doc._id, doc);
    }

This will simply map over the specified database and output an object for each row in the database, with that object containing the stored values. In addition to this basic functionality, you can of course do a much greater range of operations including reducing queries. More information on views can be found in this [great answer](http://stackoverflow.com/a/7112722/1242579) on Stack Overflow. It is worth noting that the view must be stored directly in your CouchDB instance using the Futon manager.

Updating a document

The concept of updating a document is from what I can tell frowned up on in CouchDB, rather than updating a document, you are essentially changing the pointer in your database so it point to a revised document. As a result, you have to supply the version of the document you wish to update. At the same time, I haven’t quite worked out if it is possible to only update certain values in an entry so at present, in addition to any amended values, I also supply the unchanged values. This to me is rather unwieldy.

Pjax

The site also uses [Pjax](http://pjax.heroku.com). This tool grabs html content from the server via AJAX but at the same time uses html5 pushstate to alter the url accordingly. As the details at the link states this gives the impression of a speeded up site as the whole page isn’t being reloaded. One issue for me with this tool is that when I edit a page and import content from the server, it doesn’t render correctly. As a result, I have disabled the pjax functionality for the edit page.

Another issue I haven't worked out is how to automatically enable pjax. Although I'm sure it's trivial, in the demo it is dealt via a checkbox (as this enables you to determine performance with and without pjax enabled).

To get Jquery-Pjax working with Express 3 I revised the demo [here](https://github.com/dakatsuka/express-pjax) to use express-partials, which allows the use of layouts with Express 3\. This is because pjax works by injecting the html from the server into a specified section of the layout.

**Concluding thoughts**

The code for the small blog I have created is available [on Github](http://www.github.com/grabbeh/nanoblog). It is a work in progress and I hope to try to resolve some of the unresolved issues above (or some kindly person will stumble on this blog and enlighten me!).

