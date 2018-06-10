---
path: '/Digital-Ocean-VPS-Nginx-Express-apps'
title: 'Digital Ocean VPS, Nginx and Express apps'
---

I recently started investigating the murky (at least for me) world of VPSs. I was previously hosting a few pet projects on Nodejitsu but although their service is excellent, the nature of my projects didn't really warrant using the platform.

At the same time, I was interested in learning more about using linux commands and investigating how straightforward it was for a beginner to get Express apps running on a VPS and accessible via a specified subdomain.

[Digital Ocean](http://digitalocean.com) provides a basic option at $5 per month and I spun up an instance running Ubuntu 12.04 based in Amsterdam no less.

You'll access your VPS by using a SSH client. As I'm on Windows I use [PuTTY](http://www.chiark.greenend.org.uk/%7Esgtatham/putty/). Through this you'll input your login details for the VPS and you should be able to start on the road to getting your Express app running.

[Nginx](http://wiki.nginx.org/Main) is an open source http/reverse proxy server software and is being increasingly used on the basis that it offers simplified but powerful functionality for running servers in comparison to Apache (as I understand it at least!).

The first steps was to get Nginx running. This was fairly straightforward and I followed the steps in [Nginx HTTP Server](http://www.packtpub.com/nginx-http-server/book) by Clement Nedelcu. Nginx runs by using a central configuration file, but you can incorporate other conf files with the simple use of 'include'. On my installation the conf files were located in the following folder /usr/local/nginx/conf/ on the VPS.

So following installation I had a basic http server up and running serving a index.html file at grabeh.net (adding a domain through Digital Ocean and updating the nameservers to point at the VPS was simple enough).

**_Installing node.js and your Express app_**

The next step was to identify how to get Express apps running on the VPS. Installing node.js itself was obviously key!

The most straightforward way I identified was the following:

*   apt-get install python-software-properties
*   apt-add-repository ppa:chris-lea/node.js
*   apt-get update
*   apt-get install nodejs

After this point I was able to type in 'node' and get access to the REPL. Typing in 2 + 2 did indeed give me 4 which was a pleasure to see (particularly owing to my deficient maths skills). As a bonus, you'll also get npm for package control.

The next step was to get a small Express app running on the VPS. The easiest way I found was to git clone a basic app into the VPS. You can use the one [here](http://github.com/Grabbeh/express-hello-world) on Github if you want. (Using apt-get install git-core will give you access to git commands).

Then simply 'npm install' to install the Express dependency. After that 'node app' should have the app running on port 3000.

As you will see using node app means the app is running in the foreground which means we cannot do anything else on the command line whilst the app is running. This simply will not do!

I recalled a while ago reading about Nodejitsu's Forever tool which allows you to set a node app running in the background. This [link](http://blog.nodejitsu.com/keep-a-nodejs-server-up-with-forever) on Nodejitsu's site provides step-by-step instructions, however basically just use 'npm install forever -g' and then in your app's directory you can use 'forever start app.js' and your app will be running in the background. If you're planning on running multiple apps you may want to remain the app.js file to be more descriptive.

This is because 'forever list' will specify the apps running and for me things got confusing when I was using app.js for all apps.

**_Getting your Express app displaying on a subdomain_**

The next step was to determine how to get the app to display via a subdomain on grabeh.net.

A brief visit to Stackoverflow showed the way, and it wasn't long before the Nginx 'proxy_pass' and 'upstream' directives were identified as being necessary via this [Stackoverflow question](http://stackoverflow.com/questions/5009324/node-js-nginx-and-now).

After some tinkering I used the following configuration file to specify port 3000 as the upstream location for the Express app, and then using proxy_pass and proxy_set_... to specify what should happen with requests to, in this case, helloworld.grabeh.net.
```javascript
      worker_processes 1;

      events {
        worker_connections 1024;
      }
      http {

          include       mime.types;
          default_type  application/octet-stream;
          sendfile      on;
          tcp_nopush    on;

      # specify the location of the Express app you want to serve up

      upstream helloworld {
        server localhost:3000;
      }

      # calls to www.grabeh.net will be rewritten to grabeh.net

      server {
        listen 80;
          server_name www.grabeh.net *.grabeh.net;
          rewrite ^(.*) http://grabeh.net$1 permanent;
      } 

      # specify what will happen when a request to helloworld.[your domain] is made. 
      # Here we are proxying the Express app through.

      server {
        listen 80;
        server_name helloworld.grabeh.net;

        location / {
          try_files $uri @helloworld;
      }

        location @helloworld {
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
          proxy_set_header Host $proxy_host;
          proxy_set_header X-NginX-Proxy true;
          proxy_pass http://helloworld;
          }
      }

      # basic element where we're sending index.html for requests to grabeh.net/
      server {
        listen 80; 
        server_name grabeh.net;

        location / {
          root html/home;
          index index.html index.htm;
          }  
          }
      }
```
If you use this you'll obviously have to update the domain name 'grabeh.net' to your own domain.

Testing your .conf before sending it live is important. If I'm making any changes to nginx.conf I first use 'cp nginx.conf test.conf' and make changes to test.conf rather than the live file. Testing the file is done by ./nginx -t -c [location of test.conf]. If tests pass, then using 'mv test.conf nginx.conf' will switch in the new conf for the existing one.

After switching in the modified .conf file using './nginx -s reload' should result in 'Hello World' showing when you navigate to 'helloworld.[yourdomain].[tld].

Hopefully the above or at least parts of it are useful. It's always good for me to get thoughts down to help cement my understanding. I'm still getting to grips with Nginx and whilst there was lots of good information on Digital Ocean's site and Stackoverflow of course, there didn't seem to be a full step-by-step guide to the entire process.

