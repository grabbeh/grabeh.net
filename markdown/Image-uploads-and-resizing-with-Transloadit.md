---
path: '/Image-uploads-and-resizing-with-Transloadit'
title: 'Image uploads and resizing with Transloadit'
---

Giving people the ability to upload photos has been on my mind for a while because photos are a great way to help evoke memories and also to give others a better idea of what a route involves (although I guess there’s always Google Street View for that).

I had pondered different methods to upload images and in the end I’m now using a third party service in the form of [Transloadit](http://www.transloadit.com). Before starting with image uploads I was a little hesitant that it would be a task too complex for my beginner level experience so although I have previously preferred at certain times to build functionality myself, I was definitely interested in seeing how a third party service could make things easier for me.

Transloadit has its own servers which you can use for image processing (in Routebop’s case resizing the image to a thumbnail before uploading both to an S3 instance. In terms of the front-end code, and on a basic level, Transloadit requires you to incorporate hidden fields in your file upload forms which allow you to send data to Transloadit’s servers detailing how you want images/media to be processed. This process blocks the normal submission of the form and once processed, links to the processed images are returned in a hidden form field and the whole form is then submitted to your server as usual.

However, because Routebop just deals with submitting data via jQuery’s .ajax functionality, I used the Transloadit’s handily provided jQuery plugin to disable automatic submission of the form following Transloadit’s completion of its magic. Instead, on completion, the urls for the images as stored on S3 are firstly used to render a thumbnail on the routebop.com/new page and also stored in an object and pushed into an images array, ready to be submitted with the rest of the route when the user is ready.

    $('#MyForm').transloadit({ 
      wait: true, 
      autoSubmit: false, 
      modal: false, 
      onProgress: function(bytesReceived, bytesExpected){ 
        $('#progress').text("Progress: " + (bytesReceived / bytesExpected * 100)
        .toFixed(2)+'%'); 
      }, 
      onSuccess: function(assembly){ 
        $('#progress').text(""); 
        var thumburl = assembly.results.thumb[0].url; 
        var mainurl = assembly.results[':original'][0].url; 
        $('#thumb').append("" + "x"); 
        $('#thumb').find('span').addClass('removeImage'); 
        var imgUrls = {}; 
        imgUrls['thumburl'] = thumburl; 
        imgUrls['mainurl'] = mainurl; 
        images.push(imgUrls); 
        } 
    }); 

In addition to adding the thumbnail from Transloadit into the page, I also wanted to add a 'x' button so users could remove the offending image. Mainly because I was lazy, instead of using an image of a red cross (to be clicked when a user wants to remove an uploaded image), I created a separate span and used a negative margin to push the <span>x</span> over the image in question. It doesn’t look quite as good as an image but I think it doesn’t look so bad (a fully circular span would be nice!). The code for that CSS is below.

    .removeImage {
      font-weight: bold;
      background: red;
      color: white;
      font-family: arial;
      font-size: 16px;
      margin-top: 0px;
      margin-right: 12px;
      margin-left: -8px;
      margin-bottom: 7px;
      border-radius: 15px;
      padding: 3px;
    }

Overall, I found incorporating Transloadit very straightforward and although I suspect I’m using it in a slightly different manner than intended, it’s working out well for me. Although it would definitely be interesting to explore building functionality to upload files directly to my S3 instance.

