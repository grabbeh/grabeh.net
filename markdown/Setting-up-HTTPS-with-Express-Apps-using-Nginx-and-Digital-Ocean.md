---
path: '/Setting-up-HTTPS-with-Express-Apps-using-Nginx-and-Digital-Ocean'
title: 'Setting up HTTPS with Express Apps using Nginx and Digital Ocean'
---

This is a quick list of the steps I took to get https up and running with a new app I've been working on called [Instok](https://github.com/grabbeh/instok). Although https is of course a good idea in general, the main motivation was to make sure I could use Stripe.

Without further ado, the steps are as follows (which are provided mainly as an aide memoire):

*   Using OpenSSL, generate an RSA private key and a certificate signing request using [these instructions](http://www.rackspace.com/knowledge_center/article/generate-a-csr-with-openssl) (excerpted below).

```nginx
openssl genrsa -out domain.com.key 2048

openssl req -new -key domain.com.key -out domain.csr
```
If you're planning on testing SSL you can also generate your own certificates using the below (after you've created your key and your CSR).

```nginx
    openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
```

*   Purchase a security certificate (or get one for [free](https://konklone.com/post/switch-to-https-now-for-free)). I used [NameCheap](http://www.namecheap.com) as suggested by [Stripe](https://stripe.com/help/ssl). As part of the process, you will need to submit the certificate signing request generated in the above step.
*   Once you have got access to your certificates (mine were emailed to me) copy and paste the certificate(s) into a txt file and store wherever they'll be needed on the VPS or elsewhere.

In addition to the main certificate, I was emailed an intermediate certificate. If this is the case for you, you can incorporate reference to this intermediate certificate in the 'ca' array referenced below in your node app.

*   Incorporate a HTTPS server into your app, principally with the below code. If you're wondering, the pem format is nothing particularly special and can be enabled just be saving a file as 'rsakey.pem' for example provided it has -----BEGIN CERTIFICATE----- at the start and -----END CERTIFICATE----- you guessed it at the end. It is also important to retain the format they are provided in.

```javascript
    var options = {
        // The RSA private key generated above
        key: fs.readFileSync('./config/rsakey.pem'),
        // The certicates sent to you by the certificate issuer
        cert: fs.readFileSync('./config/main.pem'),
        ca: [fs.readFileSync('./config/intermediate.pem')]
    };

    https.createServer(options, app).listen(port of your choosing);
```

One point that I got stuck on (for about a day alas) was that I initially had the https server listening on 443. I subsequently realised that this meant that Nginx could not use 443 to route requests as this was locked up by the Express app. This meant that Nginx couldn't do its job properly in terms of signposting requests to the various apps running on the VPS nor redirecting http requests to https.

*   Once the app is running on your VPS, you'll need to update your nginx.conf file. The server module for https is similar to your usual modules for http but with a reference to port 443 and to the location of your RSA key and your main certificate as per the below. I found I didn't need to reference the intermediate certificate.

```javascript
server {
       listen 443 ssl default_server;

       ssl_certificate      /path/to/your/app/main.pem;
       ssl_certificate_key  /path/to/your/app/domain.pem;

    }
```
*   Once you reload the conf file, requests to [https://widget.com](https://widget.com) should be encrypted. You'll probably want to redirect http requests to https. This can be done in several ways but the most straight-forward method appears to be:

```javascript
server {
        listen 80;
        server_name http://widget.com;
        return 301 https://widget.com;
    }
```

All in all I found the process relatively straightforward albeit with a few issues caused by my misunderstanding of how ports work.

