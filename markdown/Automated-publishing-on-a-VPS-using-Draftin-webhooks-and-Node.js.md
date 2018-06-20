---
path: '/Automated-publishing-on-a-VPS-using-Draftin-webhooks-and-Node.js'
title: 'Automated publishing on a VPS using Drafting webhooks and Node.js'
---

Draftin.com is a great tool I've been using lately to do some writing. Whilst I'm not utilising many of its more advanced features, the care and attention that its creator has put into the product shines through.

Once I'd written something my previous process of getting onto this site was to copy and paste the contents into a template file within the VPS I'm using to host this blog, and then name it appropriately. Although this isn't a particularly burdensome process, I thought there may be a simpler process.

Having a gander at Draftin I saw reference to [Webhooks](https://draftin.com/features#webhooks). Webhooks give you the ability to specify a url to which the content will be published using a simple POST request.

I thought it would be interesting to try to integrate this into the VPS so you could post data and automatically create a html file in the folder from which the html files making up this blog are served from via Nginx.

I initially created a basic Express server to test the data that was being sent. After some issues with accessing the data, I realised I need to parse the JSON to make it accessible.

Once that was done, I wrote the 'content_html' to a file in the relevant folder. However the issue was obviously that the only content being posted was the blog post itself. In addition to the content, it also needed surrounding container elements and the head element to specify css etc.

To remedy this, I created a template.html file which is then read in when post data is received. Using the excellent [Cheerio](https://github.com/MatthewMueller/cheerio) I then load in the template html and then manipulate it using simple jQuery-like functionality to add in a title and the content from the POST data from Draftin.

Once completed, the amended file is then saved as a new file with the stated title then accessible at blog.grabeh.net/[title]. Draftin also allows you to provide a location url in your response which is then captured by Draftin which is then displayed by your post.

The whole basic Express server is below for the curious. As the documentation on Draftin notes, the URL used to post data to should be sufficiently obscure.

```javascript
var express = require('express'),
  fs = require('fs'),
  cheerio = require('cheerio'),
  app = express()
app.configure(function () {
  app.use(express.bodyParser())
  app.use(app.router)
})
app.post('/', function (req, res) {
  var payload = req.body.payload
  var parsedResponse = JSON.parse(payload)
  var title = parsedResponse.name
  var htitle = title.replace(/\s+/g, '-').toLowerCase()
  var parsedhtml = parsedResponse.content_html
  fs.readFile('/usr/local/nginx/html/blog/template.html', function (err, data) {
    $ = cheerio.load(data)
    $('h3').text(title)
    $('#textbody').html(parsedhtml)
    var updatedhtml = $.html()
    fs.writeFile(
      '/usr/local/nginx/html/blog/' + htitle + '.html',
      updatedhtml,
      function (err) {
        if (!err) {
          res.set('location', 'http://blog.grabeh.net/' + htitle)
          res.send()
        }
      }
    )
  })
})
app.listen(3010)
```

I do need to resolve a few minor points like inserting a title in the head and also updating the index.html of the blog, but I think the above system creates a nice flow for automatically posting content to the blog from Draftin.

The only issue now of course is to keep focused on writing in the first place.

