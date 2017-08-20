
You know how it goes. What with all the fuss over flat design, sometimes you feel the need to stand out from the crowd just a little. Chunks of colour are nice but sometimes it's good to give a bit of depth to your site.

One way to do this is how the guys at [Treehouse](http://teamtreehouse.com) have done them on their homepage. I really liked the look of them and wondered how they created them. Basically the button moves down when clicked mimicking the appearance of an actual button being pressed down.

Without rooting around in their html and CSS I must admit I initially presumed that it would be a matter of adding an event to change the CSS class on click. However, I thought that maybe there was a more straightforward way. Turns out there is.

Using the :active suffix for the applicable CSS property, you can detail what will happen with the style when the element is active, which with our button is when it's clicked.

The first step was to set up the button itself in its pre-clicked state. Using box-shadow you can give the bottom-border of the button a shadow to help give the impression of depth.

Using :active you can then reduce the size of the box-shadow when active, so for example from 15px to 10px. This deals with reducing the bottom of the button but what about shifting the top border down you might ask? I experimented with applying a top-border, which would then be removed on :active, however the easiest method is to use the 'top' attribute together with 'position: relative'. Using relative means the top attribute will be relative to the element immediately above rather to the window as a whole.

The relevant CSS is and the button it creates are below (you'll also need some additional classes for the positioning of the text within the button, and removing default options for the a class. You'll also need to add in the moz and webkit pre-fixes to help cross-browswer compatibility.

    .button {
        height: 120px;  
        padding: 0px;
        margin: 0px; 
        background: #e00000;
        width: 300px;
        box-shadow: 0 15px 0 0 #b00000;
        position: relative;
    }

    .button:active {
        box-shadow: 0 10px 0 0 #b00000;
        top: 5px;
    }

Admittedly, this is fairly straightforward stuff, but for me, it's good to see what you can do with CSS suffixes. Also, never let it be said that basic content should be a bar to a blog post!
